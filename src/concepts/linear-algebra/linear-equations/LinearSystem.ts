import { Matrix } from "../matrices/types/Matrix.ts";
import ILinearSystem from "./ILinearSystem.ts";

export default class LinearSystem implements ILinearSystem {
  solve(): Matrix {
    throw new Error("Method not implemented.");
  }
    
}