import { Request, Response } from "express";
import { ListOneUserService } from "../services/ListOneUser";





class ListOneUserController {
    async handle(request: Request, response: Response ) {
        const { id } = request.body

        const listUsersService = new ListOneUserService();
        const users = await listUsersService.execute( id );

        return response.json(users);
    }
}

export { ListOneUserController };