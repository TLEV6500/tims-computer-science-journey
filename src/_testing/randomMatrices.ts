import Determinant from "../concepts/linear-algebra/matrices/operations/Determinant.ts";
import { Matrix } from "../concepts/linear-algebra/matrices/Matrix.ts";
import { isYes } from "../concepts/utils/validateStrings.ts";
const isExitChoice = (choice: string) => choice == 'x' || choice == 'X';

export default function () {
    let choice: string | null;
    const mtxList: Matrix[] = [];
    let count = 1;
    let curMtx: Matrix;
    let numMtx;
    let wantSquare = true;
    let wantDeterminants = true;
    let mtxMinSize = 2;
    let mtxMaxSize = 2;
    do {
        {
            choice = prompt("Enter number of matrices: (or x/X to exit) ");
            if (choice == null || Number.isNaN(choice)) continue;
            else if (isExitChoice(choice)) break;
            numMtx = Number(choice);
        }
        wantSquare = isYes(prompt("Square matrices? (y/n) ", 'y') ?? 'y');
        wantDeterminants = isYes(prompt("Show determinants, if existing? (y/n) ", 'y') ?? 'y');
        mtxMinSize = Number(prompt("Min Size: ", "2")) || 2;
        mtxMaxSize = Number(prompt("Max Size: ", "2")) || 2;
        for (let i = 0; i < numMtx; ++i) {
            curMtx = new Matrix("RANDOM", {
                matrixSize: { min: mtxMinSize, max: mtxMaxSize, isSquare: wantSquare },
                entries: { min: 0, max: 200, decimals: 0 }
            });
            choice = prompt(`Press enter to display matrix ${count}. `, "");
            ++count;
            curMtx.print();
            if (Matrix.isSquare(curMtx) && wantDeterminants) {
                console.log(Determinant.laplaceExpansion(curMtx, 1));

            }
            mtxList.push(curMtx);
        }
        choice = prompt("Restart? (y/Y | x/X)")
    } while (!isExitChoice(choice ?? 'x'));
}