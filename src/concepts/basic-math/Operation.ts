export default abstract class Operation<OperandType, ReturnType = OperandType> {
    #operands: Operation<OperandType, ReturnType>[];
    constructor(readonly name: string, readonly symbol: string, initialOperands?: Operation<OperandType, ReturnType>[]) {
        this.#operands = initialOperands ?? [];
    }

    get operands() {
        return [...this.#operands];
    }
    setOperand(index: number, newVal: Operation<OperandType, ReturnType>) {
        const oldVal = this.#operands[index];
        this.#operands[index] = newVal;
        return oldVal;
    }

    abstract getResult(): OperandType;
    getValue = this.getResult;

    abstract toString(): string;

    static nestOperands<OperandTypes, ReturnTypes>(operationList: Operation<OperandTypes, ReturnTypes>[]): Operation<any> {
        operationList;
        return new IdentityOperation<number>(0);
    }
}

export class IdentityOperation<T> extends Operation<T, T> {
    override toString(): string {
        throw new Error("Method not implemented.");
    }
    #operandValue: T;
    constructor(initialOperand: Operation<T, T> | T) {
        super("Identity", "I", initialOperand instanceof Operation ? [initialOperand] : []);
        this.#operandValue = initialOperand instanceof Operation ? initialOperand.getValue() : initialOperand;
    }

    override getResult(): T {
        return this.#operandValue;
    }
}