/**
 * Executes the given `promise` with a timeout of `ms` milliseconds. The returned promise never rejects.
 * - If the given `promise` resolves before the timeout, the result is the resolved value of the `promise`.
 * - If the given `promise` rejects before the timeout, the result is the given `value`.
 * - If the given `promise` is not settled before the timeout, the result is also the given `value`.
 *
 * Please note that native JavaScript promises are not cancellable (yet). Therefore, it is recommended to also provide a
 * custom cancellation token that aborts the execution of the `promise`. Without this token, the promise returned by
 * this function does resolve after the timeout, but the given `promise` might still be pending in the background and
 * consume resources.
 *
 * @param ms the delay for the timeout in milliseconds (a positive number)
 * @param value the result if the promise rejects or times out
 * @param promise the promise to race the timeout
 * @param token an optional token with user-defined logic to cancel the `promise`
 */
export function resolveAfterTimeout<T>(ms: number, value: T, promise: Promise<T>, token?: CancelToken): Promise<T> {
    async function tryCancelPromise() {
        if (token) {
            console.log(`Waiting another ${token.delay} ms before cancelling the promise`);
            await new Promise((resolve) => setTimeout(resolve, token.delay));

            if (token.cancel) {
                try {
                    await token.cancel();
                } catch (e) {
                    console.error("ERROR: Promise cancellation failed");
                    console.error("Reason:", typeof e === 'object' ? e.toString() : e);
                }
            } else {
                console.error("ERROR: The cancel token is not set up!");
                console.error(`Perhaps the delay of ${token.delay} ms is too short?`);
            }
        }
    }

    return new Promise((resolve) => {
        const timeout = setTimeout(async () => {
            console.log(`Promise timed out after ${ms} ms`);
            await tryCancelPromise();
            resolve(value);
        }, ms);

        return promise
            .then((result) => resolve(result)) // Important: resolve the outer promise, too!
            .catch(async (reason) => {
                console.log("WARNING: resolveAfterTimeout: Promise rejected.");
                console.log("Reason:", typeof reason === "object" ? reason.toString() : reason);
                // await tryCancelPromise(); // TODO: decide if this makes sense?
                resolve(value);
            })
            .finally(() => clearTimeout(timeout)); // Important: clear the timeout so that it is no longer pending!
    });
}

export interface CancelToken {

    /**
     * Custom logic to cancel a promise. Often, this method can only be defined when the promise to cancel already
     * executes, for example, because the promise has to set up some kind of resource first.
     */
    cancel?(): Promise<void>;

    /**
     * The time it takes until the `cancel()` method can be used after starting the execution of the promise. Use 0 if
     * the promise is immediately cancellable. In general, the delay must be experimentally derived, and can depend on
     * the promise itself, the current load on the machine, or the underlying hardware.
     */
    delay: number;
}

export function newCancelToken(delay: number): CancelToken {
    return {
        delay,
    };
}
