import { RemoveFirstParameter } from "../../utils/types.ts";
import { ElementaryMatrixRowOperations } from "./ElementaryMatrixRowOperations.ts";

type MatrixTypeGuard = (mtx: Matrix) => boolean;

type RowOperations = {
    [Key in keyof ElementaryMatrixRowOperations]: RemoveFirstParameter<ElementaryMatrixRowOperations[Key]>;
}

type MatrixEntryProducer<E extends number> = (r: number, c: number) => E;

export class Matrix<E extends number = number> implements RowOperations {
    #mtx: E[][];
    #maxDigits = 0;

    constructor(readonly rowNum: number = 1, readonly colNum: number = 1) {
        this.#mtx = new Array<E[]>(rowNum).fill(null as unknown as E[]);
        this.#mtx.forEach((_v, i, r) => r[i] = new Array<E>(colNum).fill(0 as E));
    }

    fill(...values: E[]): void;
    fill(valProducer: MatrixEntryProducer<E>): void;
    fill(firstValOrValProducer: E | MatrixEntryProducer<E>, ...values: E[]) {
        let valProducer: MatrixEntryProducer<E>;
        if (!(firstValOrValProducer instanceof Function)) {
            values.unshift(firstValOrValProducer);
            valProducer = (r, c) => {
                const ii = c + this.rowNum * (r - 1) - 1;
                return values[values.length - 1 < ii ? (values.length - 1) : ii]
            }
        } else valProducer = firstValOrValProducer;
        if (values.length == 0) values.push(0 as E);
        for (let i = 1; i <= this.rowNum; ++i) {
            for (let j = 1; j <= this.colNum; ++j) {
                this.setEntry(valProducer(i, j), i, j);
            }
        }
    }

    areInvalidPositions(row: number, col: number) {
        return row < 1 || col < 1 || row > this.rowNum || col > this.colNum
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
        if (row.length != this.colNum) throw new Error(`New row size (${row.length}) does not equal matrix row size (${this.rowNum}).`);
        this.#mtx[rowNum - 1] = row;
    }

    swap(...args: Parameters<RowOperations["swap"]>): void {
        ElementaryMatrixRowOperations.swap(this, ...args);
    }

    scalarMultiply(...args: Parameters<RowOperations["scalarMultiply"]>): void {
        ElementaryMatrixRowOperations.scalarMultiply(this, ...args);
    }

    rowSum(...args: Parameters<RowOperations["rowSum"]>): void {
        ElementaryMatrixRowOperations.rowSum(this, ...args);
    }

    toString() {
        let str = "\n";
        const r = this.rowNum, c = this.colNum;
        for (let i = 1, j = 1; i <= r; ++i) {
            if (this.rowNum == 1) str += "[ ";
            else if (i == 1) str += "┌ ";
            else if (i != r) str += "\n│ ";
            else str += "\n└ ";
            for (j = 1; j <= c; ++j) {
                str += (this.getEntry(i, j) ?? 0).toString().padEnd(this.#maxDigits, " ") + " ";
            }
            if (this.rowNum == 1) str += "]";
            else if (i == 1) str += "┐"
            else if (i != r) str += "│";
            else if (i == r) str += "┘";
        }
        return str + "\n";
    }

    toArray() {
        return JSON.parse(JSON.stringify(this.#mtx)) as E[][];
    }

    print() {
        console.log(this.toString());
    }

    static isRow: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.rowNum == 1;
    }

    static isCol: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.colNum == 1;
    }
    static isRectangular: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isSquare: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.rowNum == mtx.colNum;
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
