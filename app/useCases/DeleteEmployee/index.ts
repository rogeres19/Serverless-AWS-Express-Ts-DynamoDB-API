import { ImplementationsEmployeeRepository } from "../../repositories/implementations";
import { DeleteEmployeeController } from "./DeleteEmployeeController";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

const implementationsEmployeeRepository = new ImplementationsEmployeeRepository()


const deleteEmployeeUseCase = new DeleteEmployeeUseCase(
    implementationsEmployeeRepository

)

const deleteEmployeeController = new DeleteEmployeeController(
    deleteEmployeeUseCase
)

export { deleteEmployeeUseCase, deleteEmployeeController }
