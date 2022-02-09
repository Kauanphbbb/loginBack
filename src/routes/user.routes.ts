import { Router } from "express";
import UserController from "../controllers/UserController";

const userController = new UserController();
const routes = Router();

routes.get("/users", userController.getAll);
routes.post("/users", userController.create);
routes.delete("/users/:id", userController.delete);

export default routes;
