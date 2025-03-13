export default class Product<E> {
    #factors: E[];
    #value: E;
    constructor(f1?:E, ...otherFactors:E[]) {
        this.#factors = f1 ? [f1,...otherFactors] : [];
    }
    addFactors(...factors: E[]) {
        this.#factors.push(...factors);
        return this.#factors.length;
    }
    getValue() {
        
    }
}