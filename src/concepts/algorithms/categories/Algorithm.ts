const TimeComplexity = {
    CONSTANT_TIME: "1",
    LOGARITHMIC_TIME: "log(n)",
    LINEAR_TIME: "n",
    LINEARITHMIC_TIME: "nlog(n)",
    QUADRATIC_TIME: "n^2",
    POLYNOMIAL_TIME: "n^x",
    EXPONENTIAL_TIME: "a^n",
}

export default abstract class Algorithm {
    static TimeComplexity = TimeComplexity;
    TimeComplexity = TimeComplexity;
    abstract trackInfo(track: boolean): void;
    abstract getNumberOfSwaps(): void;
    abstract getSpaceComplexity(): Algorithm["TimeComplexity"];
    abstract getTimeComplexity(): Algorithm["TimeComplexity"];
    abstract isStable(): boolean;
    abstract isInplace(): boolean;
    abstract getNumberOfAuxObjects(): number;
}