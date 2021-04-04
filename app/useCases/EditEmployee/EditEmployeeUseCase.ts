import { Employee } from "../../entities/Employee";
import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";
import { EditEmployeeDTO } from "./EditEmployeeDTO";

export class EditEmployeeUseCase {

    constructor(
        private employeesRepository: IEmployeesRepository,
    ) { }


    public async execute(data: EditEmployeeDTO) {

        const employeeExist = await this.employeesRepository.findById(data.id);

        if (!employeeExist) {
            throw new Error("Employee does not exists.");
        }

        const completeDataEmployee: Employee = Object.assign({}, employeeExist, data);

        const employee = new Employee(completeDataEmployee);

        const response = await this.employeesRepository.edit(employee);

        return response;

    }
}
