import { Matrix } from "../matrices/types/Matrix.ts";

export default interface ILinearSystem {
    solve(): Matrix;
}