import { Matrix } from "../../../concepts/linear-algebra/matrices/mod.ts";
import { formatMatrixToAscii } from "./asciiMathFormatter.ts";

const divMtxCanvas = document.getElementById("mtx_canvas")!
const divMtxBody = document.getElementById("matrix_body")!;
const divRowOps = document.getElementById("row_operations")!
const divKeyPressed = document.getElementById("keyboard_presses")!
const selectMulRow = document.getElementById("multiply_row")!
const selectAddRowA = document.getElementById("add_row_a")!
const selectAddToRowB = document.getElementById("add_to_row_b")!
const inputScalarMul = document.getElementById("scalar_mul")!;

divMtxCanvas

divMtxBody

const canvasOpsElements = {
    formCreateNewMatrix: document.getElementById("create_new_matrix")!,
    divCanvasOps: document.getElementById("canvas_operations")!,
    inputNewMtxRows: document.getElementById("new_mtx_rows")! as HTMLInputElement,
    inputNewMtxCols: document.getElementById("new_mtx_cols")! as HTMLInputElement,
    inputNewMtxIsRandom: document.getElementById("new_mtx_is_random")! as HTMLInputElement,
    initialize() {
        this.formCreateNewMatrix.addEventListener("submit", evt => {
            evt.preventDefault();
            if (!this.inputNewMtxCols.value.length || !this.inputNewMtxRows.value.length) return;
            const rows = Number(this.inputNewMtxRows.value);
            const cols = Number(this.inputNewMtxCols.value);
            const mtx = new Matrix(rows, cols);
            console.log(this.inputNewMtxIsRandom.checked);
            (this.inputNewMtxIsRandom.checked)
            if (this.inputNewMtxIsRandom.checked) {
                mtx.fill((_r, _c) => Math.trunc(Math.random() * 20))
            }
            replaceMatrix(mtx);
        });
    }
} as const;


divRowOps

document.body.addEventListener("keypress", (evt) => {
    divKeyPressed.innerText = (evt.ctrlKey ? "Ctrl+" : "") + (evt.altKey ? "Alt+" : "") + `${evt.key}`
    console.log(`${evt.ctrlKey} ${evt.altKey} ${evt.key}`);

})

selectMulRow

selectAddRowA

selectAddToRowB

inputScalarMul

// const MathJax = await import("https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js");
function replaceMatrix(mtx: Matrix) {
    console.log(mtx);

    const mtxAscii = formatMatrixToAscii(mtx);
    const mjxContainer = divMtxBody.getElementsByTagName("mjx-container")
    divMtxBody.innerHTML = mtxAscii;
    if (mjxContainer) {
        window.MathJax.typeset();
        console.log("Rerendered");
    }
}

function initialize() {
    const mtx = new Matrix("RANDOM", {
        matrixSize: {
            min: 4,
            max: 4,
            isSquare: true
        },
        entries: {
            min: 0,
            max: 20,
            decimals: 0
        }
    })
    replaceMatrix(mtx);

    canvasOpsElements.initialize();
}

initialize();