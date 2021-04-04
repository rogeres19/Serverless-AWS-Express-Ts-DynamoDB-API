import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";
import { GetEmployeeDTO } from "./GetEmployeeDTO";

export class GetEmployeeUseCase {

    constructor(
        private employeesRepository: IEmployeesRepository,
    ) { }

    async execute(data: GetEmployeeDTO) {

        const response = await this.employeesRepository.findById(data.id);

        if (!response)
            throw new Error('Employee does not exists.')


        return response;

    }
}