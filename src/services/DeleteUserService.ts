
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    id: string
}

class DeleteUserService {
    async execute ({id} : IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);


        const userAlreadyExists = await usersRepository.findOne({ // verifica se o usuario ja existe
            id
        })

        if ( !userAlreadyExists ) { // se existir lança um erro
            throw new Error("User not exists");
        }

        const user = usersRepository.delete({ // criando instancia
            id: id
        })

        return user;

    }
}

export { DeleteUserService }

