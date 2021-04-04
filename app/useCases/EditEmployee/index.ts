import { ImplementationsEmployeeRepository } from "../../repositories/implementations";
import { EditEmployeeController } from "./EditEmployeeController";
import { EditEmployeeUseCase } from "./EditEmployeeUseCase";

const implementationsEmployeeRepository = new ImplementationsEmployeeRepository()


const editEmployeeUseCase = new EditEmployeeUseCase(
    implementationsEmployeeRepository

)

const editEmployeeController = new EditEmployeeController(
    editEmployeeUseCase
)

export { editEmployeeUseCase, editEmployeeController }
