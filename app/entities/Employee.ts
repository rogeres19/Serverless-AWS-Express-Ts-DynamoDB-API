import { v4 as uuid } from "uuid";

export class Employee {
    public readonly id: string;
    public age: number;
    public name: string;
    public role: string;


    constructor(props: Omit<Employee, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id)
            this.id = uuid();

        const hasError = this.validate(Object.assign(this, props));
        if (hasError)
            throw new Error(hasError.error);
    }

    private validate({ role, age, name }): void | any {
        if (typeof role !== "string") {
            return ({ error: '"role" must be a string' });
        } else if (typeof name !== "string") {
            return ({ error: '"name" must be a string' });
        }
        else if (typeof age !== "number") {
            return ({ error: '"age" must be a number' });
        }

    }
}