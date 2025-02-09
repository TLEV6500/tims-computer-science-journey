function findNumberEntries(str: string) {
    return str.matchAll(new RegExp(/\b[0-9]+\.?[0-9]{0,}/, 'g'));
}

export default class Parser {
    #iterator: RegExpStringIterator<RegExpExecArray> | null;
    #str: string;

    constructor(str: string) {
        this.#str = str;
        this.#iterator = null;
    }

    get source() {
        return this.#str;
    }
    set source(newSrc: string) {
        this.#str = newSrc;
        this.#iterator = null;
    }

    nextNumber() {
        if (!this.#iterator) this.#iterator = findNumberEntries(this.#str);
        const res = this.#iterator.next();
        if (res.done) {
            this.#iterator = null;
            throw new Error("NoSuchElementException");
        }
        return Number(res.value[0])
    }

    nextInt() {
        return Math.trunc((() => { const x = this.nextNumber(); console.log(x); return x })());
    }

    getAllNumbers() {
        return Parser.getAllNumbers(this.#str);
    }

    static getAllNumbers(str: string) {
        return findNumberEntries(str).toArray().map(([s]) => Number(s));
    }
}