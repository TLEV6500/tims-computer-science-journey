import { Matrix } from "../concepts/linear-algebra/matrices/Matrix.ts";

export default function main() {
    let r, c;
    r = parseInt(prompt("Enter row for matrix: ", "1")!);
    c = parseInt(prompt("Enter column for matrix: ", "1")!);
    const mtx = new Matrix(r, c);
    for (let i = 1, j = 0, x = 0; i <= r; ++i) {
        for (j = 1; j <= c; ++j) {
            x = parseFloat(prompt(`Enter [${i}][${j}] = `, "0")!);
            mtx.setEntry(x, i, j);
        }
    }
    console.log(mtx.toString());

}