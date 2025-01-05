import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session";
import multerMiddleware from "../middleware/multer";

const router = Router();

router.get("/orders",checkJwt,getOrders);
router.post("/orders",[checkJwt,multerMiddleware.single("file")],createOrder);

export default router;