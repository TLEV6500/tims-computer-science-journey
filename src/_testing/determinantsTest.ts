import Determinant from "../concepts/linear-algebra/matrices/operations/Determinant.ts";
import { Matrix } from "../concepts/linear-algebra/matrices/types/Matrix.ts";

export default function () {
    let r = prompt("Enter r: ");
    let c = prompt("Enter c: ");
    const mtx = (r != null && c != null) ? new Matrix(Number(r), Number(c)) : null;
    if (!mtx) throw new Error(`Invalid inputs r(${r}) and c(${c})`);

    mtx.fill((i, j) => {
        return Number(prompt(`(${i},${j}): `));
    })
    mtx.print();

    let row = prompt("Enter row to expand in: ");
    if (Number.isNaN(row ?? undefined)) throw new Error(`Invalid inputs r(${r}) and c(${c})`);
    let det = Determinant.laplaceExpansion(mtx, Number(row));
    console.log(`Laplace Expansion: det(A[${r}][${c}]) = ${det}`);

    det = Determinant.ruleOfSarrus(mtx);
    console.log(`Rule of Sarrus: det(A[${r}][${c}]) = ${det}`);
}