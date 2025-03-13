import Map from "./Map.ts";

export default abstract class HashTable<K extends string, V> extends Map<K, V> {
    protected array: V[];
    protected size = 0;
    constructor(readonly capacity: number) {
        super();
        this.array = [];
    }

    abstract hashCode(key: string): number;
    abstract compress(code: number): number;

    protected hash(key: string) {
        return this.compress(this.hashCode(key));
    }
}
