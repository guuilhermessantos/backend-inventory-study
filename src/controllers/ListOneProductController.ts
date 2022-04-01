import { Request, Response } from "express";
import { ListOneProductService } from "../services/ListOneProduct";





class ListOneProductController {
    async handle(request: Request, response: Response ) {
        const { id } = request.params

        const listProductsService = new ListOneProductService();
        const products = await listProductsService.execute( { id } );

        return response.json(products);
    }
}

export { ListOneProductController };