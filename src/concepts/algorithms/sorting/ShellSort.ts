import List from "../../data-structures/lists/List.ts";
import Algorithm from "../categories/Algorithm.ts";
import SortingAlgorithm from "./SortingAlgorithm.ts";

export default class ShellSort extends SortingAlgorithm {
  override sort(list: List<unknown>): void {
    throw new Error("Method not implemented.");
  }
  override trackInfo(track: boolean): void {
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