// server -> controller -> service ->  ...

import { Request, Response } from "express"
import { UpdateUserService } from "../services/UpdateUserService";


class UpdateUserController {

    async handle(request: Request, response: Response) {

        const { id } = request.params

        const { name, email, admin, password} = request.body
       
        const upadateUserService = new UpdateUserService();

        const user = await upadateUserService.execute({ id, name, email, admin, password})

        return response.json(user);
    }
}

export { UpdateUserController }

/**
 * server -> routes -> Controller -> Service (throw new Error)
 */