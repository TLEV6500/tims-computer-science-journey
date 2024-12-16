export type Step = [StepName: string, Choices: number];
export type Procedure = Array<Step>;

export const isStep = (obj: any): obj is Step => {
	return typeof obj[0] == "string" && typeof obj[1] === "number";
};
export const isProcedure = (obj: any): obj is Procedure => {
	return (
		obj instanceof Object && (obj as Procedure).every((val) => isStep(val))
	);
};
