import List from "../../data-structures/lists/List.ts";
import Algorithm from "../categories/Algorithm.ts";
import SortingAlgorithm from "./SortingAlgorithm.ts";

export default class QuickSort extends SortingAlgorithm {
    sort(list: List<unknown>): void {
        throw new Error("Method not implemented.");
    }
    trackInfo(track: boolean): void {
        throw new Error("Method not implemented.");
    }
    getNumberOfSwaps(): void {
        throw new Error("Method not implemented.");
    }
    getSpaceComplexity(): Algorithm["TimeComplexity"] {
        throw new Error("Method not implemented.");
    }
    getTimeComplexity(): Algorithm["TimeComplexity"] {
        throw new Error("Method not implemented.");
    }
    isStable(): boolean {
        throw new Error("Method not implemented.");
    }
    isInplace(): boolean {
        throw new Error("Method not implemented.");
    }
    getNumberOfAuxObjects(): number {
        throw new Error("Method not implemented.");
    }

}