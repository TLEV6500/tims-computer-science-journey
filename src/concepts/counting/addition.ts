import Collection from "../utils/collection";
import { MathElementType } from "../utils/types";

export default class AdditionPrinciple<T extends MathElementType> {
	static #instance: AdditionPrinciple<MathElementType>;
	readonly collection: Collection<T>;
	constructor(collection: Collection<T>) {
		this.collection = collection;
	}

	numberOfChoices() {
		if (this.collection.type == "number") {
		}
	}

	static numberOfChoices(collection: Collection<MathElementType>) {
		if (!this.#instance) this.#instance = new AdditionPrinciple(collection);
		this.#instance.numberOfChoices();
	}
}
