export default abstract class Map<K extends string, V> {
    abstract set(key: K, value: V): void;
    abstract get(key: K): V;
    abstract print(): void;
    abstract getSize(): number;
}