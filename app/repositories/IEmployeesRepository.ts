import { Employee } from "../entities/Employee";

export interface IEmployeesRepository {
    findById(id: string): Promise<Employee>;
    save(user: Employee): Promise<Employee>;
    edit(user: Employee): Promise<Employee>;
    delete(id: string): Promise<void>;

}
