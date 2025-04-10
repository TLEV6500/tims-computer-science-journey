import List from "../../data-structures/lists/List.ts";
import Algorithm from "../categories/Algorithm.ts";
import { compare } from "../helpers.ts";
import SortingAlgorithm from "./SortingAlgorithm.ts";

export default class InsertionSort extends SortingAlgorithm {
    override sort(list: List<unknown>): void {
        for (let i = 1; i < list.size; ++i) {
            let tmp = list.get(i);
            let j;
            for (j = i; j > 0 && compare(list.get(j - 1), tmp) < 0; --j) {
                list.set(list.get(j - 1), j)
            }
            list.set(tmp, j)
        }
    }
    override trackInfo(track: boolean): void {
        track
        throw new Error("Method not implemented.");
    }
    override getNumberOfSwaps(): void {
        throw new Error("Method not implemented.");
    }
    override getSpaceComplexity(): Algorithm["TimeComplexity"] {
        throw new Error("Method not implemented.");
    }
    override getTimeComplexity(): Algorithm["TimeComplexity"] {
        throw new Error("Method not implemented.");
    }
    override isStable(): boolean {
        throw new Error("Method not implemented.");
    }
    override isInplace(): boolean {
        throw new Error("Method not implemented.");
    }
    override getNumberOfAuxObjects(): number {
        throw new Error("Method not implemented.");
    }

}