namespace Counting {
	export type Step = [StepName: string, Choices: number];
	export const isStep = (obj: any): obj is Step => {
		return typeof obj[0] == "string" && typeof obj[1] === "number";
	};
	export type Procedure = Array<Step>;
	export const isProcedure = (obj: any): obj is Procedure => {
		return (
			obj instanceof Object &&
			(obj as Procedure).every((val) => isStep(val))
		);
	};

	export class MultiplicationPrinciple {
		static #instance: MultiplicationPrinciple;
		#steps;
		outcomes_n;

		private constructor(steps: Procedure) {
			this.#steps = steps;
			this.outcomes_n = this.#steps.map(([_, num]) => num);
		}

		set steps(steps: Procedure) {
			this.#steps = steps;
			this.outcomes_n = this.#steps.map(([_, num]) => num);
		}
		get steps() {
			return this.#steps;
		}

		static totalNumberOfOutcomes(steps: Procedure): number;
		static totalNumberOfOutcomes(
			numObjects: number,
			numStates: number
		): number;
		static totalNumberOfOutcomes(
			steps_or_NumObjects: Procedure | number,
			numStates?: number
		) {
			if (isProcedure(steps_or_NumObjects)) {
				if (!MultiplicationPrinciple.#instance)
					MultiplicationPrinciple.#instance =
						new MultiplicationPrinciple(steps_or_NumObjects);
				else this.#instance.steps = steps_or_NumObjects;
				return this.#instance.outcomes_n.reduce(
					(acc, val) => acc * val
				);
			} else if (typeof steps_or_NumObjects === "number" && numStates) {
				return numStates ** steps_or_NumObjects;
			}
		}
	}
}

export default Counting;
