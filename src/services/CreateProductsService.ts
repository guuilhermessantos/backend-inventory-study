import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { UsersRepositories } from "../repositories/UserRepositories";
import { ListOneUserService } from "./ListOneUser";

interface IProductRequest {
    id_creator: string;
    obs_product: string;
    name_product: string;
    quantity: number;
}


class CreateProductsService {

    async execute ({id_creator, obs_product, name_product, quantity }: IProductRequest) {
        
        const productsRepositories = getCustomRepository(ProductsRepositories);
        const listOneUserService = new ListOneUserService()
        const user = await listOneUserService.execute({ id: id_creator })

        if (!name_product) {   
            throw new Error ("Name incorrect"); 
        }

        const product = productsRepositories.create({ 
            id_creator,
            name_product,
            obs_product,
            quantity,
        });

        await productsRepositories.save(product)

        const responseFormatted = Object.assign(product, { idCreator: user })

        return responseFormatted;

    }
}


export { CreateProductsService }