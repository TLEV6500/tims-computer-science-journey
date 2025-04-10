import LinearSystem from "../../linear-equations/LinearSystem.ts";
import ElementaryMatrix from "../types/ElementaryMatrix.ts";
import { Matrix } from "../types/Matrix.ts";

export default class LUFactorization<T extends number = number> extends LinearSystem {
    #A: Matrix<T>;
    #L: Matrix<T>;
    #U: Matrix<T>;
    #E: ElementaryMatrix<T>[];
    #x: Matrix<T>;
    #y: Matrix<T>;

    constructor(A: Matrix<T>) {
        super();
        this.#A = A;
    }

    // Solve U=E_desc[]*A using row operations
    step1(A = this.#A, U = this.#U, E = this.#E) {

    }

    // Solve L=...E_asc[]*...
    step2(E = this.#E) {

    }

    // Solve system
    override solve(): Matrix {
        // 1. Solve L*y=b for y
        // 2. Solve U*x=y for x as the final result
        return null as unknown as Matrix;
    }
}