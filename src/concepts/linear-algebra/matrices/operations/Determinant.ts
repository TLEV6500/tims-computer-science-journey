import { Matrix } from "../types/Matrix.ts";

export default class Determinant {
    static of2x2Mtx(mtx: Matrix) {
        if (!Determinant.is2x2Mtx(mtx)) throw Error("Matrix not of size 2x2.");
        return mtx.getEntry(1, 1) * mtx.getEntry(2, 2) - mtx.getEntry(2, 1) * mtx.getEntry(1, 2);
    }

    static minor(mtx: Matrix, row: number, col: number): number {
        const sub = mtx.submatrix(row, col);
        // console.log("submatrix");
        // sub.print();
        if (Determinant.is2x2Mtx(sub)) {
            return Determinant.of2x2Mtx(sub);
        }
        return Determinant.laplaceExpansion(sub, row);
    }

    static cofactor(mtx: Matrix, row: number, col: number) {
        return Math.pow(-1, row + col) * Determinant.minor(mtx, row, col);
    }


    /* DETERMINANT METHODS */

    static laplaceExpansion(mtx: Matrix, expandInRow: number): number {
        if (!Matrix.isSquare(mtx)) throw new Error("Cannot use this method for non-square matrices");
        else if (mtx.rowNum == 1) return mtx.getEntry(1, 1);
        let det = 0, entry, cofactor, aC;
        for (let j = 1; j <= mtx.rowNum; ++j) {
            entry = mtx.getEntry(expandInRow, j);
            cofactor = Determinant.cofactor(mtx, expandInRow, j);
            aC = entry * cofactor;
            det += aC;
            console.log(`a[${expandInRow}][${j}]=${entry}; C[${expandInRow}][${j}]=${cofactor}; a*C=${aC}; partialDet=${det}`);
        }
        console.log();
        return det;
    }

    static ruleOfSarrus(mtx: Matrix) {
        if (mtx.rowNum != 3 || mtx.colNum != 3) throw new Error("Rule of Sarrus only works with 3x3 matrices");
        let det = 0, step = 0, prod, i1, j1, i2, j2, entry;
        // ADDITION, then SUBTRACTION
        while (step < 2) {
            for (i1 = 0; i1 < 3; ++i1) {
                for (j1 = 0, prod = 1; j1 < 3; ++j1) {
                    i2 = j1 + 1;
                    j2 = (j1 + i1) % 3 + 1;
                    entry = mtx.getEntry((step == 0) ? i2 : (3 - i2 + 1), j2);
                    prod *= entry;
                    console.log(`Ax[${i1}][${j1}]=${entry}; A[${i2}][${j2}]=${entry}; a*b*c=${prod}`);
                }
                if (step == 0) det += prod;
                else det -= prod;
                console.log("det=" + det);
            }
            ++step;
        }
        console.log();
        return det;
    }


    /* INPUT VALIDATION */

    static is2x2Mtx(mtx: Matrix) {
        return mtx.rowNum == 2 && mtx.colNum == 2;
    }
}