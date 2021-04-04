import { Employee } from '../../entities/Employee';
import { EmployeeModel } from '../../model';
import { IEmployeesRepository } from '../IEmployeesRepository'

export class DynamodbEmployeeRepository implements IEmployeesRepository {


    async findById(id: string) {
        const item = await EmployeeModel.get(id);
        return item;
    };


    async save(employee: Employee) {
        const { role, name, age } = employee;
        const result = await EmployeeModel.create(employee);
        return result;

    };


    async edit(employee: Employee) {
        const { id, name, role, age } = employee;
        const result = await EmployeeModel.update({ id, name, role, age });
        return result;

    }

    async delete(id: string): Promise<void> {
        await EmployeeModel.delete({ id });
    }


}