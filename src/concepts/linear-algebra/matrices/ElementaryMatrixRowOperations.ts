import { Matrix } from "./Matrix.ts";
import Parser from "../../utils/Parser.ts";
import { isNo, isYes } from "../../utils/validateStrings.ts";

const menu = "\nElementary Row Operations".concat(
    "\n's' - Swap two rows",
    "\n'*' - Multiply row with scalar",
    "\n'+' - Store sum of two rows",
    "\n'x' - Skip section"
)

export class ElementaryMatrixRowOperations {
    static #instance: ElementaryMatrixRowOperations | null = null;

    private constructor() { }

    swap(mtx: Matrix, rowA: number, rowB: number) {
        const rowArrA = mtx.getRow(rowA);
        const rowArrB = mtx.getRow(rowB);
        mtx.setRow(rowArrA, rowB);
        mtx.setRow(rowArrB, rowA);
    }

    scalarMultiply(mtx: Matrix, scalar: number, row: number) {
        const r = mtx.getRow(row);
        r.forEach((x, i) => mtx.setEntry(x * scalar, row, i + 1));
    }

    rowSum(mtx: Matrix, rowA: number, rowB: number, storeResultTo: number) {
        if (rowA == rowB) throw new Error("IllegalArgumentException: rowA and rowB must not be the same");
        const rowArrA = mtx.getRow(rowA);
        const rowArrB = mtx.getRow(rowB);
        // console.log(rowA, rowB);

        if (storeResultTo == rowA) rowArrA.forEach((x, i) => mtx.setEntry(x + rowArrB[i], rowA, i + 1));
        else if (storeResultTo == rowB) rowArrB.forEach((x, i) => mtx.setEntry(x + rowArrA[i], rowB, i + 1));
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

    static main() {
        let [r, c] = Array<number>(2);
        let opt = "n";
        let p: Parser | null = null;
        let input = "";
        do {
            r = parseInt(prompt("Enter row for matrix: ", "1")!);
            c = parseInt(prompt("Enter column for matrix: ", "1")!);
            const mtx = new Matrix(r, c);
            opt = prompt("Fill matrix automatically?", "y")!;
            if (isYes(opt)) {
                opt = prompt("Enter fill value(s): ", "1")!;
                mtx.fill(...Parser.getAllNumbers(opt));
            }
            else for (let i = 1, j = 0, x = 0; i <= r; ++i) {
                for (j = 1; j <= c; ++j) {
                    x = Number(prompt(`Enter [${i}][${j}] = `, "0")!);
                    mtx.setEntry(x, i, j);
                }
            }
            console.log(menu);
            do {
                mtx.print();
                opt = prompt("Operation:[s|*|+|x]", "x")!;
                switch (opt) {
                    case 's': {
                        input = prompt("row[a] <-> row[b] -- 'a b': ", "1 2")!;
                        if (!p) p = new Parser(input);
                        else p.source = input;
                        mtx.swap(p.nextInt(), p.nextInt())
                        break;
                    }
                    case '*': {
                        input = prompt("scalar[a] * row[b] => row[b] -- 'a b': ", "1 2")!;
                        if (!p) p = new Parser(input);
                        else p.source = input;
                        mtx.scalarMultiply(p.nextInt(), p.nextNumber())
                        break;
                    }
                    case '+': {
                        input = prompt("row[a] + row[b] => row[x:a|b] -- 'a b x': ", "1 2 1")!;
                        if (!p) p = new Parser(input);
                        else p.source = input;
                        mtx.rowSum(p.nextInt(), p.nextInt(), p.nextInt())
                        break;
                    }
                    case 'x': {
                        if (isNo(prompt("Are you sure? ", "n")!)) opt = '0';
                        break;
                    }
                }
            } while (opt != 'x');

            do { opt = prompt("Would you like to go again? ", "n")! } while (!isYes(opt) && !isNo(opt));
        } while (isYes(opt));
    }
}