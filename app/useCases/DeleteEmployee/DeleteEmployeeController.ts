import { Request, Response } from "express"
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase"

export class DeleteEmployeeController {

    constructor(
        private DeleteEmployeeUseCase: DeleteEmployeeUseCase
    ) { }


    async handle(request: Request, response: Response): Promise<Response | void> {
        const { id } = request.params;
        try {
            let res = await this.DeleteEmployeeUseCase.execute({ id });

            response.status(200).send({ deleted: "ok" });
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}