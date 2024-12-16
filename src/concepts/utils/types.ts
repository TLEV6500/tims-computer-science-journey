import { Procedure } from "../counting";

export type MathPrimitiveType = string | number;
export type MathPrimitiveTypeName = "string" | "number";
export const isMathPrimitiveType = (val: any): val is MathPrimitiveType => {
	return typeof val == "string" || typeof val == "number";
};

enum CustomTypeNameEnum {
	undefined,
	NumSet,
	StrSet,
	NumArrSet,
	StrArrSet,
}

export type CustomTypeName = keyof typeof CustomTypeNameEnum;

export const isCustomTypeName = (val: any): val is CustomTypeName => {
	let valElem: any;
	if (val instanceof Set) {
		valElem = val.values().next();
	} else if (val instanceof Array) {
		valElem = val[0];
	} else return false;
	return isMathPrimitiveType(valElem);
};

export const getCustomTypeName = (val: any): CustomTypeName => {
	let type = "";
	let subType = "";
	if (val instanceof Set) {
		type = "Set";
		subType = typeof val.values().next();
	} else if (val instanceof Array) {
		type = "Arr";
		subType = typeof val[0];
	}
	if (subType == "string") return ("Str" + type) as CustomTypeName;
	if (subType == "number") return ("Num" + type) as CustomTypeName;
	return "undefined";
};

export type MathElementType =
	| Procedure
	| number
	| string
	| Array<number>
	| Array<string>
	| Set<number>
	| Set<string>;
export type MathElementTypeName = CustomTypeName | "number" | "string";
// TODO: not yet done here
export const isMathElementType = (val: any): val is MathElementType => {
	if (
		val == "number" ||
		val == "string" ||
		val == "undefined" ||
		isCustomTypeName(val)
	)
		return true;
	return false;
};
