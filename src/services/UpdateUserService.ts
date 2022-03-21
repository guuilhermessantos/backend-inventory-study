import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    id: string,
    name: string| any;
    email: string | any;
    admin?: boolean | any;
    password: string | any;
}

class UpdateUserService {
    async execute({id, name, email, admin = false, password} : IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await usersRepository.findOne({ // verifica se o usuario ja existe
            id
        })
        

        if ( !userAlreadyExists ) { // se não existir lança um erro
            throw new Error("User not exists");
        }

        if (userAlreadyExists) {
            // usersRepository.merge(userAlreadyExists, name, email, admin, password );
            const results = await usersRepository.save({id, name, email, admin, password});
            
            return results;
          }
    }
}

export { UpdateUserService }