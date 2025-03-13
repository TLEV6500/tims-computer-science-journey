import Operation from "./Operation.ts";

export default class Expression<E> {
    #body: Operation<E, E>;
    constructor(...initialOperations: Operation<E, E>[]) {
        this.#body = Operation.nestOperands(initialOperations);
        this.#body;
    }
}