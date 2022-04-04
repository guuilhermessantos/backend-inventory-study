import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListProductsController } from "./controllers/ListProductsController";
import { CreateProductController } from "./controllers/CreateProductController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateProductController } from "./controllers/UpdateProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { ListOneUserService } from "./services/ListOneUser";
import { ListOneUserController } from "./controllers/ListOneUserController";
import { ListOneProductController } from "./controllers/ListOneProductController";
import { ListProductsUserControler } from "./controllers/ListProductsUser";


const router = Router();

const createUserController = new CreateUserController();
const createProductsController = new CreateProductController();
const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController();
const listProductsController = new ListProductsController();
const updateUserController = new UpdateUserController();
const deleteUserController  = new DeleteUserController()
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController()
const listOneUserController  = new ListOneUserController();
const listOneProductController = new ListOneProductController();
const listProductsUserController = new ListProductsUserControler





router.post("/login", authenticateUserController.handle); //login


router.post("/users", createUserController.handle); // criar user
router.get("/users", ensureAuthenticated, listUsersController.handle) // buscar todos os usuarios
router.get("/users/:id", listOneUserController.handle) // buscar 1 usuario

router.put("/users/:id",  updateUserController.handle) // editar user

router.delete("/users/:id",deleteUserController.handle) // deletando user

router.post("/products", createProductsController.handle); // criar produtos
router.get("/products", ensureAuthenticated, listProductsController.handle ) // buscar todos os produtos
router.get("/products/:id", listOneProductController.handle) // buscar 1 usuario

router.get("/productsuser/:id_creator", listProductsUserController.handle) // busca produtos do usuario

router.put("/products/:id",  updateProductController.handle) // editar um produto
router.delete("/products/:id",   deleteProductController.handle) // deletar um produto

export { router };