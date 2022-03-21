import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"
import { classToPlain } from "class-transformer"
import { User } from "../entities/User"


interface IOneUser {
    id: string;
}


class ListOneUserService  {
    async execute(id :IOneUser) {
        const usersRepositories= getCustomRepository(UsersRepositories)
        const user = await usersRepositories.findOne(
            id
        )

        return classToPlain<User>(user);
    }

}

export { ListOneUserService }