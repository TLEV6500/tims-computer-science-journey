export default interface Comparable<T> {
    compare(that: T): number;
}

export default class Comparable<T> {
    static isComparable<U>(it: unknown): it is Comparable<U> {
        return !!Object.getOwnPropertyDescriptor(it, "compare");
    }
}