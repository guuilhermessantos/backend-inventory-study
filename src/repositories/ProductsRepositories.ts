import { Repository, EntityRepository } from "typeorm"
import { Products } from "../entities/Products"


@EntityRepository(Products)
class ProductsRepositories extends Repository<Products> {

}

export { ProductsRepositories }