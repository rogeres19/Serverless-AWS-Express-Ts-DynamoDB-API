import { Employee } from "../../entities/Employee";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";
import { CreateEmployeeDTO } from "./CreateEmployeeDTO";

export class CreateEmployeeUseCase {

    constructor(
        private employeesRepository: IEmployeesRepository,
    ) { }

    public async execute(data: CreateEmployeeDTO) {
        const employee = new Employee(data);
        const response = await this.employeesRepository.save(employee);
        return response;

    }
}
