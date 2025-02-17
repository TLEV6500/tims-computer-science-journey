export class DataLogger<E> {
    #data: E[];
    constructor() {
        this.#data = [];
    }
    log(d: E) {
        this.#data.push(d);
    }
    get data() {
        return [...this.#data];
    }
}

export class For {
    static #instance?: For;
    #start: number;
    #endX: number;
    #body: (i: number) => number;
    constructor(start: number, endX: number, readonly updator: (i: number) => number, body: For["body"], readonly logger?: DataLogger<unknown>) {
        this.#start = start;
        this.#endX = endX;
        this.#body = body;
    }
    get start() {
        return this.#start;
    }
    setStart(s: number) {
        this.#start = s;
        return this;
    }
    get endX() {
        return this.#endX
    }
    setEndX(e: number) {
        this.#endX = e;
        return this;
    }

    get body() {
        return this.#body;
    }
    setBody(newBod: For["body"]) {
        this.#body = newBod;
        return this;
    }

    run() {
        const isIncreasing = this.start < this.endX;
        const predicate = isIncreasing ? (i: number) => i < this.endX : (i: number) => i > this.endX;
        let time = 2;
        // console.log(this.#start, this.#endX)
        for (let i = this.start; predicate(i); ++time) {
            // console.log("i=", i)
            time += this.body(i);
            i = this.updator(i)
        }
        this.logger?.log(time);
        return time;
    }
    static use(instance?: For) {
        if (instance) this.#instance = instance;
        else if (this.#instance) return this.#instance;
        return instance;
    }
    static clearDefault() {
        const f = this.use();
        this.#instance = undefined;
        return f;
    }
}