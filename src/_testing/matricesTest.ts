import { Matrix } from "../concepts/linear-algebra/matrices/Matrix.ts";

export default function main() {
    const mtx1 = new Matrix(5, 5);
    mtx1.print();
    mtx1.fill((r, c) => r == c ? 1 : 0);
    mtx1.print();
}