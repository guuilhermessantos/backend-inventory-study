import { Request, Response } from "express";
import { ListOneUserService } from "../services/ListOneUser";





class ListOneUserController {
    async handle(request: Request, response: Response ) {
        const { id } = request.params


        

        const listUsersService = new ListOneUserService();

        
        

        const user = await listUsersService.execute( {id} );

        

        return response.json(user);
    }
}

export { ListOneUserController };