import * as Counting from "../concepts/discrete-math/counting";

export default function test(): void {
	const uni: Counting.Procedure = [
		["sections", 6],
		["labs", 11],
		["problems", 12],
	];
	const res1 = Counting.MultiplicativePrinciple.totalNumberOfOutcomes(uni);
	console.log(res1);

	const res2 = Counting.MultiplicativePrinciple.totalNumberOfOutcomes(7, 2);
	console.log(res2);
}
