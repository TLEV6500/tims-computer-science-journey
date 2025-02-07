import Collection from "./collection.ts";
import { MathElementType } from "./types.ts";

export function isDisjoint<T extends MathElementType>(col: Collection<T>): boolean {
    return false;
}