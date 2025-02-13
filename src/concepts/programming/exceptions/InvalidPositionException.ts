
export default class InvalidPositionException extends Error {
    constructor(pos: number, size: number) {
        super(`Position ${pos} is not in the range 1 to ${size}`);
        super.name = "InvalidPositionException";
    }

    /**
     * Checks if position is invalid and throws its instance, otherwise do nothing
     * @param pos triggering position
     * @param max max position allowed
     * @throws InvalidPositionException
     */
    static throwIfNecessary(pos: number[], max: number[]) {
        const i = pos.findIndex((p, i) => p < 1 || p > max[i]);
        if (i != -1) throw new InvalidPositionException(pos[i], max[i]);
    }
}