import List from "../../data-structures/lists/List.ts";
import Algorithm from "../categories/Algorithm.ts";

export default abstract class SortingAlgorithm extends Algorithm {
    abstract sort(list: List<unknown>): void;
}