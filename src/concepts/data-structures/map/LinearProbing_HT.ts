import HashFunction from "./HashFunction.ts";
import HashTable from "./HashTable.ts";

export default class LinearProbing_HT<K extends string, V> extends HashTable<K, V> {
    constructor(override readonly capacity: number, readonly prime: number) {
        super(capacity);
    }

    // Polynomial hashcode
    override hashCode(key: string): number {
        return HashFunction.hashCode(key, "polynomial", this.prime);
    }
    override compress(code: number): number {
        return HashFunction.compress(code, "division", new Map<K, V>());
    }
    override set(key: K, value: V): void {
        throw new Error("Method not implemented.");
    }
    override get(key: K): V {
        throw new Error("Method not implemented.");
    }
    override print(): void {
        throw new Error("Method not implemented.");
    }
    override getSize(): number {
        throw new Error("Method not implemented.");
    }

}