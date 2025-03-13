type HashingMethodNames = "polynomial";
type CompressingMethodNames = "division" | "MAD";

export default class HashFunction {
    private constructor() { }

    static hashCode(key: string, method: HashingMethodNames, primeConstant: number) {
        switch (method) {
            case "polynomial": return this.polynomialHashCode(key, primeConstant);
            default: throw new Error("Invalid hash code method!");
        }
    }

    static compress(code: number, method: CompressingMethodNames, args: Map<string, number>) {
        switch (method) {
            case "division": {
                return this.compressByDivide(code, args.get("size")!);
            }
            case "MAD": {
                return this.compressByMultiplyAddDivide(code, args.get("a")!, args.get("b")!, args.get("p")!, args.get("size")!);
            }
        }
    }

    static compressByDivide(code: number, size: number) {
        return code % size;
    }

    static compressByMultiplyAddDivide(code: number, a: number, b: number, p: number, size: number) {
        return ((a * code + b) % p) % size;
    }

    static polynomialHashCode(key: string, baseConstant: number): number {
        let code = 0;
        for (let i = 0; i < key.length; ++i) {
            code += key.charCodeAt(i) * (baseConstant ** i);
        }
        return code;
    }
}