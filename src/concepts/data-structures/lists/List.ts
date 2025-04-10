export default interface List<E> {
    /**
     * Adds elem into the last element of the list.
     * @param elem element to insert
     */
    add(elem: E): void;

    /**
     * Returns the integer in the *pos*-th position.
     * If the position is invalid, throw an *InvalidPositionException*
     * @param pos 1-indexed position
     * @throws InvalidPositionException
     */
    get(pos: number): E;

    set(elem: E, pos: number): void;

    /**
     * Removes the first occurrence of elem from the list.
     * @param elem element to remove
     * @returns the 1-indexed position from which the element was removed, otherwise 0
     */
    remove(elem: E): number;

    /**
     * Prints the list in readable format.
     * @returns result string for output
     */
    print(): string;

    /**
     * @returns size of the list.
     */
    get size(): number;

    /**
     * @returns true if list is empty, otherwise false
     */
    isEmpty(): boolean;

    /**
     * Inserts elem as the *pos*-th position in the list.
     * @param elem the element to add to the list.
     * @param pos the 1-indexed position from which to add the element
     * @throws InvalidPositionException
     */
    addAt(elem: E, pos: number): void;

    /**
     * Removes the element at the specified position position.
     * @param pos the 1-indexed position of the element to be removed
     * @returns the element removed
     */
    removeAt(pos: number): E;
}