import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";



export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;

    const userRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await userRepositories.findOne(user_id)

    // Verifica se o usuario e admin

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    })
}