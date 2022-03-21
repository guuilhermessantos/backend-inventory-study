
import { getCustomRepository } from "typeorm"
import { ProductsRepositories } from "../repositories/ProductsRepositories";

interface IProductRequest {
    id: string
}

class DeleteProductService {
    async execute ({ id } : IProductRequest) {

        const productsRepository = getCustomRepository(ProductsRepositories);


        const productAlreadyExists = await productsRepository.findOne({ // verifica se o usuario ja existe
            id
        })

        if ( !productAlreadyExists ) { // se nao existir lança um erro
            throw new Error("Product not exists");
        }

        const product = productsRepository.delete({ // criando instancia
            id: id
        })

        return product;

    }
}

export { DeleteProductService }

