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

