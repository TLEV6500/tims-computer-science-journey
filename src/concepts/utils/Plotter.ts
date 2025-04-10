import Plotly from "npm:plotly.js";
export default class Plotter {
    #data: Plotly.Data[];
    #layout: Partial<Plotly.Layout>;
    #config: Partial<Plotly.Config>;

    constructor(data: Plotly.Data[],layout: Partial<Plotly.Layout>,config: Partial<Plotly.Config>) {
        this.#data = data;
        this.#layout = layout;
        this.#config = config;
    }

    render(root: Plotly.Root) {
        return Plotly.newPlot(root, this.#data, this.#layout, this.#config);
    }
}