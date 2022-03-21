import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProductRequest {
    id_creator: string;
    obs_product: string;
    name_product: string;
    quantity: number;
}


class CreateProductsService {

    async execute ({id_creator, obs_product, name_product, quantity }: IProductRequest) {
        
        const productsRepositories = getCustomRepository(ProductsRepositories);

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

        return product;

    }
}


export { CreateProductsService }