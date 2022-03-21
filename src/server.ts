import express, {Request, Response, NextFunction} from "express";
import "reflect-metadata";
import "express-async-errors";
import cors from "cors"

import { router } from "./routes";

import "./database"

const app = express();
app.use(cors()) // outras fontes consegue acessar a aplicação

app.use(express.json())

app.use(router); // inserindo rotas dentro do express // todas as rotas fazem parte do projeto.

app.use((err: Error, request: Request, response: Response, next: NextFunction) => { //middleware 
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }
    
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log("🚗  Server is runing !"))

/**
 * GET    =>  Buscar uma informação
 * POST   => Inserir (CRIAR) uma informação
 * PUT    => Alterar uma informação 
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros
 * Routes Params => http://localhost:3000/produtos/78347583458345
 * Query Params =>  http://localhost:3000/produtos?name=teclado&description=tecladobom&
 * Body Params =>   vem no corpo da minha requisição => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 */


//  * GET    =>  Buscar uma informação

// app.get("/test/", (request, response) => {
   
//     // Request => Entrando
//     // Response => Saindo
//     return response.send("Olá nlw")
// })

//  * POST   => Inserir (CRIAR) uma informação

// app.post("/test-post", (request, response) => {
//     return response.send("Olá NLW método POST")
// })