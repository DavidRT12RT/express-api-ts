import express from 'express';

import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user.controller';
import logMiddleware from '../middleware/log';

const router = express.Router();

router.get("/users",logMiddleware,getUsers);
router.get("/users/:id",getUserById);
router.post("/users",createUser);
router.put("/users/:id",updateUser);
router.delete("/users/id",deleteUser);

export default router;
