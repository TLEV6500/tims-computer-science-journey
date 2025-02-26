export default class HashFunction {
    #baseConstant: ReturnType<Math["trunc"]>;

    constructor(baseConstant: number = 31) {
        this.#baseConstant = Math.trunc(baseConstant);

    }

    polynomialHashCode<T>(obj: T): bigint {
        return 0n;
    }

    static hashCode<T>(obj: T) {
        obj
    }

    static compress() {

    }

    static polynomialHashCode<T>(obj: T, baseConstant: number): bigint {
        const str = JSON.stringify(obj);
        baseConstant = Math.trunc(baseConstant);
        return Object.values(str).reduce((res, str, i) => BigInt((str.codePointAt(0) ?? 1) * Math.pow(baseConstant, i)) + res, 0n);
    }
}