import { Matrix } from "../../../concepts/linear-algebra/matrices/mod.ts";

export function formatMatrixToAscii(mtx: Matrix) {
    let str = "`[";
    for (let i = 1; i <= mtx.rowNum; ++i) {
        str += "[" + mtx.getRow(i) + "]" + (i + 1 <= mtx.rowNum ? "," : "]`");
    }
    return str;
}