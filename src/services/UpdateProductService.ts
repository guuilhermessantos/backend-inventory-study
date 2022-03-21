import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProductRequest {
    id: string;
    name_product: string| any;
    obs_product: string | any;
    quantity: number | any;
}

class UpdateProductService {
    async execute({id , name_product, obs_product, quantity } : IProductRequest) {

        const productsRepository = getCustomRepository(ProductsRepositories);

        const productAlreadyExists = await productsRepository.findOne({ // verifica se o usuario ja existe
            id
        })
        console.log('productAlreadyExists', productAlreadyExists)
        console.log(id);
        

        if ( !productAlreadyExists ) { // se não existir lança um erro
            throw new Error("Product not exists");
        }

        if (productAlreadyExists) {
            const results = await productsRepository.save({id, name_product, obs_product, quantity});
            
            return results;
          }
    }
}

export { UpdateProductService }