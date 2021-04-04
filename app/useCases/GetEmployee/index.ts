import { ImplementationsEmployeeRepository } from "../../repositories/implementations";
import { GetEmployeeController } from "./GetEmployeeController";
import { GetEmployeeUseCase } from "./GetEmployeeUseCase";

const implementationsEmployeeRepository = new ImplementationsEmployeeRepository();


const getEmployeeUseCase = new GetEmployeeUseCase(
    implementationsEmployeeRepository,

);

const getEmployeeController = new GetEmployeeController(
    getEmployeeUseCase,
);

export { getEmployeeUseCase, getEmployeeController };
