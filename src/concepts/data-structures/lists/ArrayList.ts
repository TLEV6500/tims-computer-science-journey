import InvalidPositionException from "../exceptions/InvalidPositionException.ts";
import List from "./List.ts";

export default class ArrayList<E extends Object> implements List<E> {
    #array: E[];

    constructor() {
        this.#array = [];
    }

    insert(elem: E): void {
        this.#array.push(elem);
    }

    get(pos: number): E {
        InvalidPositionException.throwIfNecessary(pos, this.size);
        return this.#array[pos - 1];
    }

    remove(elem: E): number {
        let i = 0;
        this.#array = this.#array.filter((e, j) => e.toString() != elem.toString() || (i = j, false));
        return i;
    }

    print(): string {
        return `ArrayList[${this.size}]: ` + this.#array.reduce((s, e) => s + ` ${e.toString()}`, "[") + " ]";
    }

    get size() {
        return this.#array.length;
    }

    isEmpty(): boolean {
        return this.size == 0;
    }

    addAt(elem: E, pos: number): void {
        InvalidPositionException.throwIfNecessary(pos, this.size + 1);
        if (pos == this.size + 1) return this.insert(elem);
        const right = this.#array.splice(pos - 1, this.size - pos + 1, elem);
        this.#array = this.#array.concat(right);
    }

    removeAt(pos: number): E {
        InvalidPositionException.throwIfNecessary(pos, this.size);
        let removed: unknown;
        this.#array = this.#array.filter((e, i) => i != pos - 1 || (removed = e, false))
        return removed as E;
    }

}