import * as Counting from "../concepts/counting";

export default function test(): void {
	const uni: Counting.Procedure = [
		["sections", 6],
		["labs", 11],
		["problems", 12],
	];
	const res1 = Counting.MultiplicationPrinciple.totalNumberOfOutcomes(uni);
	console.log(res1);

	const res2 = Counting.MultiplicationPrinciple.totalNumberOfOutcomes(7, 2);
	console.log(res2);
}
