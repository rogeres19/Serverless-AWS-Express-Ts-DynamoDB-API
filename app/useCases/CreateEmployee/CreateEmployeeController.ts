import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

export class CreateEmployeeController {

    constructor(
        private createEmployeeUseCase: CreateEmployeeUseCase,
    ) { }


    public async handle(request: Request, response: Response): Promise<Response | void> {

        try {
            const res = await this.createEmployeeUseCase.execute(request.body);

            response.status(200).send(res);
        } catch (err) {
            return response.status(400).json({
                message: err?.message,
            });
        }

    }
}
