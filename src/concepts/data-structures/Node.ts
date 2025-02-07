export default class Node<E> extends Object {
    #element: E;
    readonly #links: Node<E>[];

    constructor(elem: E) {
        super();
        this.#element = elem;
        this.#links = [];
    }

    get elem() {
        return this.#element;
    }
    set elem(e: E) {
        this.#element = e;
    }

    getLink(index: number) {
        return this.#links[index];
    }
    setLink(index: number, link: Node<E>) {
        this.#links[index] = link;
    }
    override toString(): string {
        return `{elem:${this.#element};links:${this.#links.toString()}}`;
    }
}