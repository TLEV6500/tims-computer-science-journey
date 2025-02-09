
// TODO: refactor to accept multiple positions for tables and matrices
export default class InvalidPositionException extends Error {
    constructor(pos: number, size: number) {
        super(`Out of bounds. Accessed ${pos} when range is only from 1 to ${size}`);
        super.name = "InvalidPositionException";
    }

    /**
     * Checks if position is invalid and throws its instance, otherwise do nothing
     * @param pos triggering position
     * @param max max position allowed
     * @throws InvalidPositionException
     */
    static throwIfNecessary(pos: number, max: number) {
        if (pos < 1 || pos > max) throw new InvalidPositionException(pos, max);
    }
}