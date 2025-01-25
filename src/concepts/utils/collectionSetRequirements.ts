import Collection from "./collection";
import { MathElementType } from "./types";

export function isDisjoint<T extends MathElementType>(col: Collection<T>): boolean {
    return false;
}