import { Matrix } from "./Matrix.ts";

export class ElementaryMatrixRowOperations {
    static #instance: ElementaryMatrixRowOperations | null = null;

    private constructor() { }

    swap(mtx: Matrix, rowA: number, rowB: number) {
        const rowArrA = mtx.getRow(rowA);
        const rowArrB = mtx.getRow(rowB);
        mtx.setRow(rowArrA, rowB);
        mtx.setRow(rowArrB, rowA);
    }

    scalarMultiply(mtx: Matrix, row: number, scalar: number) {
        const r = mtx.getRow(row);
        r.forEach(x => x * scalar);
    }

    rowSum(mtx: Matrix, rowA: number, rowB: number, storeResultTo: "rowA" | "rowB") {
        const rowArrA = mtx.getRow(rowA);
        const rowArrB = mtx.getRow(rowB);
        if (storeResultTo == "rowA") rowArrA.forEach((x, i) => x + rowArrB[i]);
        else if (storeResultTo == "rowB") rowArrB.forEach((x, i) => x + rowArrA[i]);
    }

    static swap = (...args: Parameters<ElementaryMatrixRowOperations["swap"]>) => {
        if (!this.#instance) this.#instance = new ElementaryMatrixRowOperations();
        this.#instance.swap(...args);
    }

    static scalarMultiply = (...args: Parameters<ElementaryMatrixRowOperations["scalarMultiply"]>) => {
        if (!this.#instance) this.#instance = new ElementaryMatrixRowOperations();
        this.#instance.scalarMultiply(...args);
    }

    static rowSum = (...args: Parameters<ElementaryMatrixRowOperations["rowSum"]>) => {
        if (!this.#instance) this.#instance = new ElementaryMatrixRowOperations();
        this.#instance.rowSum(...args);
    }
}