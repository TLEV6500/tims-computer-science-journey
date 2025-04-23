import Determinant from "../operations/Determinant.ts";
import { ElementaryMatrixRowOperations, RowOperations } from "../operations/ElementaryMatrixRowOperations.ts";
import { Matrix } from "./Matrix.ts";

declare module "./Matrix.ts" {
    interface Matrix<E extends number> {
        fill(...values: E[]): void;
        fill(valProducer: MatrixEntryProducer<E>): void;
        fill(firstValOrValProducer: E | MatrixEntryProducer<E>, ...values: E[]): void;
        areInvalidPositions(row: number, col: number): boolean;
        /**
         * 
         * @param row 1-indexed integer
         * @param col 1-indexed integer
         * @returns a matrix entry at (row,col) of type E
         */
        getEntry(row: number, col: number): E;
        setEntry(elem: E, row: number, col: number): void;
        /**
         * 
         * @param row 1-indexed integer
         * @returns a matrix row at `row` of type E[]
         */
        getRow(row: number): E[];
        setRow(row: E[], rowNum: number): void;
        swap(...args: Parameters<RowOperations["swap"]>): void;
        scalarMultiply(...args: Parameters<RowOperations["scalarMultiply"]>): void;
        rowSum(...args: Parameters<RowOperations["rowSum"]>): void;
        toString(): string;
        toArray(): E[][];
        print(): void;
        submatrix(deleteRow: number, deleteCol: number): Matrix;
        matrixOfMinors(): Matrix;
    }
}

type MatrixEntryProducer<E extends number> = (r: number, c: number) => E;
Matrix.prototype.fill = function <E extends number>(firstValOrValProducer: E | MatrixEntryProducer<E>, ...values: E[]) {
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

Matrix.prototype.areInvalidPositions = function (row: number, col: number) {
    return row < 1 || col < 1 || row > this.rowNum || col > this.colNum
}

Matrix.prototype.getEntry = function (row: number, col: number) {
    if (this.areInvalidPositions(row, col)) throw new Error(`Invalid Positions: (${row},${col})`);
    return this.mtx[row - 1][col - 1];
}
Matrix.prototype.setEntry = function <E extends number>(elem: E, row: number, col: number) {
    if (this.areInvalidPositions(row, col)) throw new Error(`Invalid Positions: (${row},${col})`);
    this.mtx[row - 1][col - 1] = elem;
    const l = elem.toString().length;
    if (l > this.maxDigits) this.maxDigits = l;
}
Matrix.prototype.getRow = function (row: number) {
    if (this.areInvalidPositions(row, 1)) throw new Error("Invalid Row Number " + row);
    return this.mtx[row - 1];
}
Matrix.prototype.setRow = function <E extends number>(row: E[], rowNum: number) {
    if (this.areInvalidPositions(rowNum, 1)) throw new Error("Invalid Row Number");
    if (row.length != this.colNum) throw new Error(`New row size (${row.length}) does not equal matrix row size (${this.rowNum}).`);
    this.mtx[rowNum - 1] = row;
}

Matrix.prototype.swap = function (...args: Parameters<RowOperations["swap"]>): void {
    ElementaryMatrixRowOperations.swap(this, ...args);
}

Matrix.prototype.scalarMultiply = function (...args: Parameters<RowOperations["scalarMultiply"]>): void {
    ElementaryMatrixRowOperations.scalarMultiply(this, ...args);
}

Matrix.prototype.rowSum = function (...args: Parameters<RowOperations["rowSum"]>): void {
    ElementaryMatrixRowOperations.rowSum(this, ...args);
}

Matrix.prototype.toString = function () {
    let str = "\n";
    const r = this.rowNum, c = this.colNum;
    for (let i = 1, j = 1; i <= r; ++i) {
        if (this.rowNum == 1) str += "[ ";
        else if (i == 1) str += "┌ ";
        else if (i != r) str += "\n│ ";
        else str += "\n└ ";
        for (j = 1; j <= c; ++j) {
            str += (this.getEntry(i, j) ?? 0).toString().padEnd(this.maxDigits, " ") + " ";
        }
        if (this.rowNum == 1) str += "]";
        else if (i == 1) str += "┐"
        else if (i != r) str += "│";
        else if (i == r) str += "┘";
    }
    return str + "\n";
}

Matrix.prototype.toArray = function <E extends number>() {
    return JSON.parse(JSON.stringify(this.mtx)) as E[][];
}

Matrix.prototype.print = function () {
    console.log(this.toString());
}

Matrix.prototype.submatrix = function (deleteRow: number, deleteCol: number): Matrix {
    const sub = new Matrix(this.rowNum - 1, this.colNum - 1);
    let i1, i2, j1, j2;
    for (i1 = i2 = j1 = j2 = 1; i1 <= this.rowNum; ++i1) {
        if (i1 != deleteRow) {
            for (j1 = 1, j2 = 1; j1 <= this.colNum; ++j1) {
                if (j1 != deleteCol) {
                    sub.setEntry(this.getEntry(i1, j1), i2, j2);
                    ++j2;
                }
            }
            ++i2
        }
    }
    return sub;
}

Matrix.prototype.matrixOfMinors = function () {
    const mtxMin = new Matrix(this.rowNum, this.colNum);
    for (let i = 1, j; i <= this.rowNum; ++i) {
        for (j = 1; j <= this.colNum; ++j) {
            mtxMin.setEntry(Determinant.minor(this, i, j), i, j)
        }
    }
    return mtxMin;
}