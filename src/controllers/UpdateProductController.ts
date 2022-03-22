// server -> controller -> service ->  ...

import { Request, Response } from "express"
import { UpdateProductService } from "../services/UpdateProductService";


class UpdateProductController {

    async handle(request: Request, response: Response) {

        const { id } = request.params

        const {name_product, obs_product, quantity} = request.body

        const upadateProductService = new UpdateProductService();

        const user = await upadateProductService.execute({ id, name_product, obs_product, quantity })

        return response.json(user);
    }
}

export { UpdateProductController }
