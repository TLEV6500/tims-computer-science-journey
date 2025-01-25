/**
 * The additive principle states that if event A can occur in m ways, and event B can occur in n disjoint ways, then the event “A or B” can occur in m+n ways.
 * -- from https://discrete.openmathbooks.org/dmoi3/sec_counting-addmult.html
 */

import Collection from "../utils/collection";
import { MathElementType } from "../utils/types";

export default class AdditivePrinciple<T extends MathElementType> {
	static #instance: AdditivePrinciple<MathElementType>;
	readonly collection: Collection<T>;
	constructor(collection: Collection<T>) {
		this.collection = collection;
	}

	numberOfChoices() {
		if (this.collection.type == "number") {
		}
	}

	static numberOfChoices(collection: Collection<MathElementType>) {
		if (!this.#instance) this.#instance = new AdditivePrinciple(collection);
		this.#instance.numberOfChoices();
	}
}
