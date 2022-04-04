

import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"
import { Products } from "../entities/Products"
import { ProductsRepositories } from "../repositories/ProductsRepositories";


interface IProductsUser{
    id_creator: string;
}


class ListProductsUserService  {
    async execute(id_creator :IProductsUser) {
        const productsRepositories= getCustomRepository(ProductsRepositories)

        
        const product = await productsRepositories.find(
            id_creator
        )


        if (product.length > 0) {   
            throw new Error ("Existem produtos criados deste usuario"); 
        }

        

        return classToPlain<Products>(product);
    }

}

export { ListProductsUserService }