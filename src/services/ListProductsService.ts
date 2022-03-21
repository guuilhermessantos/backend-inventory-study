import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";
import { classToPlain } from "class-transformer"
import { Products } from "../entities/Products";


class ListProductsService {
    async execute() {

        const productsRepositories = getCustomRepository(ProductsRepositories);

        const products = await productsRepositories.find();

        

        return classToPlain<Products>(products);
    }
}

export { ListProductsService }