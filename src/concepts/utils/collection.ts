import {
	MathElementType,
	isMathElementType,
	isMathPrimitiveType,
	MathElementTypeName,
	MathPrimitiveTypeName,
	getCustomTypeName,
} from "./types.ts";

export default class Collection<T extends MathElementType> extends Set<T> {
	#elementType: MathElementTypeName = "undefined";
	constructor() {
		super();
	}

	override add(value: T): this {
		super.add(value);
		if (isMathElementType(value)) {
			if (isMathPrimitiveType(value))
				this.#elementType = typeof value as MathPrimitiveTypeName;
			else this.#elementType = getCustomTypeName(value);
		}
		return this;
	}

	get type() {
		return this.#elementType;
	}
	set type(type: MathElementTypeName) {
		if (this.#elementType) return;
		this.#elementType = type;
	}
}
