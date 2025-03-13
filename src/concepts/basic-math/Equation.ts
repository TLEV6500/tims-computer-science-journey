import Expression from "./Expression.ts";

export default class Equation<E> {
    #leftSide: Expression<E>;
    #rightSide: Expression<E>
    constructor() { }
}