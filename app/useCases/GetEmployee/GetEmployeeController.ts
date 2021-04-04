import { Request, Response } from "express";
import { GetEmployeeUseCase } from "./GetEmployeeUseCase";

export class GetEmployeeController {

    constructor(
        private getEmployeeUseCase: GetEmployeeUseCase,
    ) { }


    public async handle(request: Request, response: Response): Promise<Response | void> {
        const { id } = request.params;
        try {
            const res = await this.getEmployeeUseCase.execute({ id });

            response.status(200).send(res);
        } catch (err) {
            return response.status(400).json({
                message: err?.message,
            });
        }

    }
}
