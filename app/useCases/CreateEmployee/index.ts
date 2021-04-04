import { ImplementationsEmployeeRepository } from "../../repositories/implementations/";
import { CreateEmployeeController } from "./CreateEmployeeController";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

const implementationsEmployeeRepository = new ImplementationsEmployeeRepository()


const createEmployeeUseCase = new CreateEmployeeUseCase(
    implementationsEmployeeRepository

)

const createEmployeeController = new CreateEmployeeController(
    createEmployeeUseCase
)

export { createEmployeeUseCase, createEmployeeController }
