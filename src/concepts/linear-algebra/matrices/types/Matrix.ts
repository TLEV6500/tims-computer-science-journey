import { RowOperations } from "../operations/ElementaryMatrixRowOperations.ts";

type MatrixTypeGuard = (mtx: Matrix) => boolean;

type RandomMatrixOptions = {
    matrixSize: { min: number, max: number, isSquare: boolean },
    entries: { min: number, max: number, decimals: number }
};

export class Matrix<E extends number = number> implements RowOperations {
    protected mtx: E[][];
    #maxDigits = 0;
    // #paddingPerColumn: number[] = [];
    readonly rowNum: number;
    readonly colNum: number;

    protected set maxDigits(d: number) {
        this.#maxDigits = d;
    }

    protected get maxDigits() {
        return this.#maxDigits;
    }

    constructor(rowNum: number, colNum: number);
    constructor(randomIndicator: "RANDOM", randomOptions: RandomMatrixOptions);
    constructor(rowNumOrRandomIndicator: number | "RANDOM" = 1, colNumOrRandOpts: number | RandomMatrixOptions = 1) {
        if (typeof rowNumOrRandomIndicator == 'string' && typeof colNumOrRandOpts == 'object') {
            if (colNumOrRandOpts.matrixSize.max <= colNumOrRandOpts.matrixSize.min) this.rowNum = this.colNum = colNumOrRandOpts.matrixSize.min;
            else if (colNumOrRandOpts.matrixSize.isSquare) this.rowNum = this.colNum = Math.trunc(Math.random() * (colNumOrRandOpts.matrixSize.max + 1)) || colNumOrRandOpts.matrixSize.min;
            else {
                this.rowNum = Math.trunc(Math.random() * (colNumOrRandOpts.matrixSize.max + 1)) || colNumOrRandOpts.matrixSize.min;
                this.colNum = Math.trunc(Math.random() * (colNumOrRandOpts.matrixSize.max + 1)) || colNumOrRandOpts.matrixSize.min;
            }
            this.mtx = new Array<E[]>(this.rowNum);
            for (let i = 0, j; i < this.rowNum; ++i) {
                this.mtx[i] = [];
                for (j = 0; j < this.colNum; ++j) {
                    const n = (Number((Math.random() * colNumOrRandOpts.entries.max).toFixed(colNumOrRandOpts.entries.decimals)) + colNumOrRandOpts.entries.min) as E;
                    // console.log(n);
                    this.setEntry(n, i + 1, j + 1);
                }
            }
        }
        else {
            this.rowNum = rowNumOrRandomIndicator as number;
            this.colNum = colNumOrRandOpts as number;
            this.mtx = new Array<E[]>(this.rowNum).fill(null as unknown as E[]);
            this.mtx.forEach((_v, i, r) => r[i] = new Array<E>(colNumOrRandOpts as number).fill(0 as E));
        }
    }

    static isSingleton: MatrixTypeGuard = (mtx: Matrix) => {
        return this.isRow(mtx) && this.isCol(mtx);
    }

    static isRow: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.rowNum == 1;
    }

    static isCol: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.colNum == 1;
    }
    static isRectangular: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.rowNum != mtx.colNum;
    }
    static isSquare: MatrixTypeGuard = (mtx: Matrix) => {
        return mtx.rowNum == mtx.colNum;
    }
    static isIdentity: MatrixTypeGuard = (mtx: Matrix) => {
        if (!this.isSquare(mtx)) return false;
        for (const row of mtx.mtx) {
            if (row.reduce((y, x) => y + x) != 1) return false;
        }
        return true;
    }
    static isZero: MatrixTypeGuard = (mtx: Matrix) => {
        for (const row of mtx.mtx) {
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
        let i, j, x;
        for (i = 1; i <= mtx.rowNum; ++i) {
            for (j = 1; j < mtx.colNum; ++j) {
                x = mtx.getEntry(i, j);
                if (j >= i && x == 0 || j < i && x != 0) return false;
            }
        }
        return true;
    }
    static isLowerTriangular: MatrixTypeGuard = (mtx: Matrix) => {
        let i, j, x;
        for (i = 1; i <= mtx.rowNum; ++i) {
            for (j = 1; j < mtx.colNum; ++j) {
                x = mtx.getEntry(i, j);
                if (j < i && x == 0 || j >= i && x != 0) return false;
            }
        }
        return true;
    }
    static isSymmetric: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
    static isOrthogonal: MatrixTypeGuard = (mtx: Matrix) => {
        throw new Error("Has not yet been implemented!");
    }
}