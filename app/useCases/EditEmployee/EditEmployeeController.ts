import { Request, Response } from "express"
import { EditEmployeeUseCase } from "./EditEmployeeUseCase"

export class EditEmployeeController {

    constructor(
        private EditEmployeeUseCase: EditEmployeeUseCase
    ) { }


    async handle(request: Request, response: Response): Promise<Response | void> {
        const data = Object.assign({}, request.body, request.params);
        console.log(data);

        try {
            let res = await this.EditEmployeeUseCase.execute(data)

            response.status(200).send(res);
        } catch (err) {
            return response.status(400).json({
                message: err?.message
            })
        }

    }
}