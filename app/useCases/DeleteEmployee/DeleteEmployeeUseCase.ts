import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";
import { DeleteEmployeeDTO } from "./DeleteEmployeeDTO";

export class DeleteEmployeeUseCase {

    constructor(
        private employeesRepository: IEmployeesRepository,
    ) { }

    async execute(data: DeleteEmployeeDTO) {
        const employExist = await this.employeesRepository.findById(data.id);

        if (!employExist)
            throw new Error('Employee does not exists.')

        const response = await this.employeesRepository.delete(data.id);

        return response;

    }
}