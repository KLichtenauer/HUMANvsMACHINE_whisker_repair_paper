import {Assembler} from "../../assembler/Assembler";
import {MultiMap} from "../../assembler/utils/MultiMap";
import {ConnectedExprSelector} from "../../assembler/selectors";
import {FixSpace, MutationCategory, RepairMutationOperator} from "./RepairMutation";
import {DebugLogger, pick, pickBySuspiciousness} from "./utils";
import {ChangeLog} from "../utils/RepairMeta";
import {SuspiciousnessMap} from "../SuspiciousnessMetric";
import {Meta} from "../../assembler/meta";
import {BlockID, isBlock, isBlockID} from "../../assembler/types/blocks/Block";

// Replace/duplicate expression: copy an expression and replace an existing expression with it.
export const replaceExpression = new class implements RepairMutationOperator {
    private _getReplaceableExpressions(project: Assembler, {exprs: sourceExprs}: FixSpace, blacklist: Set<BlockID>): MultiMap<ConnectedExprSelector, Meta> {
        const replaceableExpressions = new MultiMap<ConnectedExprSelector, Meta>();

        const targetExprs = project.getConnectedExprs() // We do not replace unconnected expressions.
            .filter((expr) => !blacklist.has(expr.blockID));

        for (const sourceExpr of sourceExprs) {
            for (const targetExpr of targetExprs) {
                if (project.canReplaceExpr(targetExpr, sourceExpr)) {
                    replaceableExpressions.set(targetExpr, sourceExpr);
                }
            }
        }

        return replaceableExpressions;
    }

    canApply(assembler: Assembler, fixSpace: FixSpace, blacklist: Set<BlockID>): boolean {
        return this._canApply(this._getReplaceableExpressions(assembler, fixSpace, blacklist));
    }

    private _canApply(expressions: MultiMap<ConnectedExprSelector, Meta>): boolean {
        return expressions.size > 0
    }

    // Replace a suspicious expression with another randomly chosen expression.
    apply(
        assembler: Assembler,
        suspiciousness: SuspiciousnessMap,
        debugLog: DebugLogger,
        fixSpace: FixSpace,
        blacklist: Set<BlockID>
    ): ChangeLog | null {
        const replaceableExpressions = this._getReplaceableExpressions(assembler, fixSpace, blacklist);

        if (!this._canApply(replaceableExpressions)) {
            return null;
        }

        const exprsToReplace = [...replaceableExpressions.keys()];

        const exprIDs = Array.from(new Set(exprsToReplace.map(({blockID}) => blockID)));
        const exprID = pickBySuspiciousness(exprIDs, suspiciousness);
        const exprToReplace = pick(exprsToReplace.filter((expr) => expr.blockID === exprID));

        const replacement = pick(replaceableExpressions.get(exprToReplace));

        debugLog(`Replacing expression "${exprToReplace.blockID}" with ${stringify(replacement)}`);
        const {renamed, deleted} = assembler.replaceExpr(exprToReplace, replacement);

        const changeLog = {
            parents: [],
            operator: this.toString(),
            operands: [exprToReplace.blockID],
            renamed,
            deleted,
            exprToReplace,
            replacement,
        };

        return changeLog;
    }

    toString(): string {
        return 'replace expression mutation';
    }

    get category(): MutationCategory {
        return "change";
    }
};

function stringify(meta: Meta): string {
    if (meta.type === "Block") {
        const block = meta.blocks[meta.rootID]
        const opcode = isBlock(block) ? block.opcode : "variable/list";
        return `"${opcode}" block`;
    }

    const [, input] = meta.input;

    if (isBlockID(input)) {
        const block = meta.blocks[input];
        const opcode = isBlock(block) ? block.opcode : "variable/list";
        return `"${opcode}" block`;
    }

    return JSON.stringify(input);
}
