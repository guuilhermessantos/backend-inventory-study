

import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"
import { Products } from "../entities/Products"
import { ProductsRepositories } from "../repositories/ProductsRepositories";


interface IOneUser {
    id: string;
}


class ListOneProductService  {
    async execute(id :IOneUser) {
        const productsRepositories= getCustomRepository(ProductsRepositories)
        const product = await productsRepositories.findOne(
            id
        )

        return classToPlain<Products>(product);
    }

}

export { ListOneProductService }