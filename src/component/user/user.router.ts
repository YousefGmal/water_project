import { Router } from "express";
import { addUser, getUsers } from "./user.controller";

const router = Router();
router.post('/', addUser)
router.get('/', getUsers)

export {router as userRouter};