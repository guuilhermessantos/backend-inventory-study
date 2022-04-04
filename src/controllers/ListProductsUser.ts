import { Request, Response } from "express";
import { ListProductsUserService } from "../services/ListProductsUser";





class ListProductsUserControler {
    async handle(request: Request, response: Response ) {
        const { id_creator } = request.params

        

        const listProductsService = new ListProductsUserService();
        const products = await listProductsService.execute( { id_creator } );


        

        return response.json(products);
    }
}

export { ListProductsUserControler };