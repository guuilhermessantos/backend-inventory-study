import { Request, Response } from "express";
import { CreateProductsService } from "../services/CreateProductsService";

class CreateProductController {
    async handle(request: Request, response: Response) {

        const { name_product, quantity, obs_product, id_creator } = request.body
        


        const createProductService = new CreateProductsService();

        const product = await createProductService.execute({
            id_creator: id_creator,
            name_product,
            obs_product, 
            quantity
        })

        return response.json(product)

    }
}

export { CreateProductController }