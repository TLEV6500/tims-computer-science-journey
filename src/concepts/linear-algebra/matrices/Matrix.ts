import { RemoveFirstParameter } from "../../utils/types.ts";
import { ElementaryMatrixRowOperations } from "./ElementaryMatrixRowOperations.ts";

type MatrixTypeGuard = (mtx: Matrix) => boolean;

type RowOperations = {
    [Key in keyof ElementaryMatrixRowOperations]: RemoveFirstParameter<ElementaryMatrixRowOperations[Key]>;
}

export class Matrix<E extends number = number> implements RowOperations {
    #mtx: E[][];
    #maxDigits = 0;

    constructor(readonly rowSize: number = 1, readonly colSize: number = 1) {
        this.#mtx = new Array<E[]>(rowSize).fill(null as unknown as E[]);
        this.#mtx.forEach((_v, i, r) => (r[i] = new Array<E>(colSize).fill(0 as E))
        );
    }

    areInvalidPositions(row: number, col: number) {
        return row < 1 || col < 1 || row > this.rowSize || col > this.colSize
    }

    getEntry(row: number, col: number) {
        if (this.areInvalidPositions(row, col)) throw new Error(`Invalid Positions: (${row},${col})`);
        return this.#mtx[row - 1][col - 1];
    }
    setEntry(elem: E, row: number, col: number) {
        if (this.areInvalidPositions(row, col)) throw new Error(`Invalid Positions: (${row},${col})`);
        this.#mtx[row - 1][col - 1] = elem;
        const l = elem.toString().length;
        if (l > this.#maxDigits) this.#maxDigits = l;
    }
    getRow(row: number) {
        if (this.areInvalidPositions(row, 1)) throw new Error("Invalid Row Number " + row);
        return this.#mtx[row - 1];
    }
    setRow(row: E[], rowNum: number) {
        if (this.areInvalidPositions(rowNum, 1)) throw new Error("Invalid Row Number");
        if (row.length != this.rowSize) throw new Error(`New row size (${row.length}) does not equal matrix row size (${this.rowSize}).`);
        this.#mtx[rowNum - 1] = row;
    }

    swap(rowA: number, rowB: number): void {
        ElementaryMatrixRowOperations.swap(this, rowA, rowB);
    }

    scalarMultiply(row: number, scalar: number): void {
        ElementaryMatrixRowOperations.scalarMultiply(this, row, scalar)
    }

    rowSum(rowA: number, rowB: number, storeResultTo: "rowA" | "rowB"): void {
        ElementaryMatrixRowOperations.rowSum(this, rowA, rowB, storeResultTo);
    }

    toString() {
        let str = "";
        const r = this.rowSize, c = this.colSize;
        for (let i = 1, j = 1; i <= r; ++i) {
            if (i == 1) str += "┌ ";
            else if (i != r) str += "\n│ ";
            else str += "\n└ ";
            for (j = 1; j <= c; ++j) {
                str += (this.getEntry(i, j) ?? 0).toString().padEnd(j == c ? 0 : this.#maxDigits, " ") + " ";
            }
            if (i == 1) str += "┐ "
            else if (i != r) str += "│";
            else if (i == r) str += "┘ ";
        }
        return str;
    }

    static isRow: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.rowSize == 1;
    }

    static isCol: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.colSize == 1;
    }
    static isRectangular: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isSquare: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.rowSize == mtx.colSize;
    }
    static isIdentity: MatrixTypeGuard = (mtx: Matrix) => {
        if (!this.isSquare(mtx)) return false;
        for (const row of mtx.#mtx) {
            if (row.reduce((y, x) => y + x) != 1) return false;
        }
        return true;
    }
    static isZero: MatrixTypeGuard = (mtx: Matrix) => {
        for (const row of mtx.#mtx) {
            if (row.reduce((y, x) => y + x) != 0) return false;
        }
        return true;
    }
    static isDiagonal: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isSingular: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isNonsingular: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isUpperTriangular: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isLowerTriangular: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isSymmetric: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isOrthogonal: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }


}
