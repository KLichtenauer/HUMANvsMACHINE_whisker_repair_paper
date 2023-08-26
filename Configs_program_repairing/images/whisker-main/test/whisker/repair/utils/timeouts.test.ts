import {CancelToken, newCancelToken, resolveAfterTimeout} from "../../../../src/repair/utils/timeouts";
import {expect} from "@jest/globals";

describe("resolveAfterTimeout()", () => {
    let resolved = null;
    let cancelled = null;

    let clearTimeoutSpy: jest.SpiedFunction<typeof clearTimeout> = null;
    let setTimeoutSpy: jest.SpiedFunction<typeof setTimeout> = null;

    function resolveWithSuccessAfter(ms: number, token?: CancelToken): Promise<"Success"> {
        return new Promise((resolve) => {
            const timeout = setTimeout(() => {
                resolved = true;
                resolve("Success");
            }, ms);

            if (token) {
                token.cancel = async () => {
                    cancelled = true;
                    clearTimeout(timeout);
                };
            }
        });
    }

    function rejectWithErrorAfter(ms: number, token?: CancelToken): Promise<never> {
        return new Promise((_resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Error");
            }, ms);

            if (token) {
                token.cancel = async () => {
                    cancelled = true;
                    clearTimeout(timeout);
                };
            }
        });
    }

    beforeAll(() => {
        clearTimeoutSpy = jest.spyOn(global, "clearTimeout");
        setTimeoutSpy = jest.spyOn(global, "setTimeout");
    });

    beforeEach(() => {
        resolved = false;
        cancelled = false;
        clearTimeoutSpy?.mockClear();
        setTimeoutSpy?.mockClear();
    });

    it("fulfills with the given `value` when the wrapped promise times out", async () => {
        await expect(resolveAfterTimeout(10, "dummy", resolveWithSuccessAfter(1000)))
            .resolves.toEqual("dummy");
    });

    it("fulfills with the `value` of the wrapped promise when it fulfills before the timeout", async () => {
        await expect(resolveAfterTimeout(100, "dummy", resolveWithSuccessAfter(10)))
            .resolves.toEqual("Success");
    });

    it("clears the timeout when the promise fulfills in time", async () => {
        await resolveAfterTimeout(100, "dummy", resolveWithSuccessAfter(10));

         const [, {value: timeout}] = setTimeoutSpy.mock.results;

        // It seems this delay is necessary to ensure the spy has been updated... Without it, the test fails (?)
        await new Promise((resolve) => setTimeout(resolve, 10));

        expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
        expect(clearTimeoutSpy).toHaveBeenCalledWith(timeout);
    });

    it("fulfills with the given `value` when the wrapped promise rejects before the timeout", async () => {
        await expect(resolveAfterTimeout(100, "dummy", rejectWithErrorAfter(10)))
            .resolves.toEqual("dummy");
    });

    it("clears the timeout when the promise rejects in time", async () => {
        await resolveAfterTimeout(100, "dummy", rejectWithErrorAfter(10));

        const [, {value: timeout}] = setTimeoutSpy.mock.results;

        // It seems this delay is necessary to ensure the spy has been updated... Without it, the test fails (?)
        await new Promise((resolve) => setTimeout(resolve, 10));

        expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
        expect(clearTimeoutSpy).toHaveBeenCalledWith(timeout);
    });

    it("cancels the wrapped promise using the given cancel token", async () => {
        // Create a new token that cancels the promise 10ms after the timeout.
        const token = newCancelToken(10);

        // A promise that takes 50ms to complete, aborted after 10ms.
        await expect(resolveAfterTimeout(10, "dummy", resolveWithSuccessAfter(50, token), token))
            .resolves.toEqual("dummy");
        expect(cancelled).toBeTruthy();

        // Wait another 75ms. If there's a bug in the implementation, and the promise is not cancelled, this is enough
        // time for the promise to resolve.
        await new Promise((resolve) => setTimeout(resolve, 75));

        // In the end, if the promise was cancelled, it must not have been resolved.
        expect(resolved).toBeFalsy();
    });

    // TODO: decide if this makes sense?
    it.skip("cancels the wrapped promise using the given cancel token even if it rejects before the timeout", async () => {
        // Create a new token that cancels the promise 10ms after the timeout.
        const token = newCancelToken(10);

        // A promise that rejects after only 10ms, with a generous timeout of 100ms.
        await expect(resolveAfterTimeout(100, "dummy", rejectWithErrorAfter(10, token), token))
            .resolves.toEqual("dummy");

        // The current time is t=10ms. The promise has just rejected. At t=20ms, the cancel token will have kicked in.
        // We wait another 30ms. Execution should continue at t=40ms, which is plenty of time for the cancel token.
        await new Promise((resolve) => setTimeout(resolve, 30));

        // At t=40ms, the cancel token must have been executed.
        expect(cancelled).toBeTruthy();
    });
});
