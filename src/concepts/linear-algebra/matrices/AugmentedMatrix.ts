import { Matrix } from "./Matrix.ts";

type AugMtxRowSizes = [LH: number, RH: number];

export default class AugmentedMatrix extends Matrix {
    #colSizes: AugMtxRowSizes;
    constructor(rows: number, cols: AugMtxRowSizes);
    constructor(LMtx: Matrix, RMtx: Matrix);
    constructor(rowsOrLMtx: number | Matrix = 2, colsOrRMtx: AugMtxRowSizes | Matrix) {
        super(
            ...(
                typeof rowsOrLMtx == "number" ? [rowsOrLMtx, (colsOrRMtx as number[]).reduce((y, x) => x + y)]
                    : [rowsOrLMtx.rowNum, rowsOrLMtx.colNum + (colsOrRMtx as Matrix).colNum]
            )
        )
        if (rowsOrLMtx instanceof Matrix && colsOrRMtx instanceof Matrix) {
            this.#colSizes[1] = rowsOrLMtx.colNum
            for (const i of this.mtx.keys()) {
                this.setRow([...rowsOrLMtx.getRow(i), ...colsOrRMtx.getRow(i)], i)
            }
        }
        else this.#colSizes = colsOrRMtx;
    }
}

// const am = new AugmentedMatrix()