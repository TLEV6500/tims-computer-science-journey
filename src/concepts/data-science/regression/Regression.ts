import DataSet from "../utils/DataSet.ts";

export default abstract class Regression {
    #dataset: DataSet | null;
    constructor() {
        this.#dataset = null;
    }
    get dataset() { return this.#dataset }
}