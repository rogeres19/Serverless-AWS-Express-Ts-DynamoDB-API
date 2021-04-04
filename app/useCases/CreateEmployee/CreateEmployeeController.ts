import { Request, Response } from "express"
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase"

export class CreateEmployeeController {

    constructor(
        private createEmployeeUseCase: CreateEmployeeUseCase
    ) { }


    async handle(request: Request, response: Response): Promise<Response | void> {

        try {
            let res = await this.createEmployeeUseCase.execute(request.body)

            response.status(200).send(res);
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}