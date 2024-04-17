import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.createUser);
userRouter.get("/:id", UserController.getUserbyId);
userRouter.patch("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);
