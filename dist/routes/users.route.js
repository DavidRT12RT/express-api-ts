"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_js_1 = require("../controllers/user.controller.js");
var router = express_1.default.Router();
router.get("/users", user_controller_js_1.getUsers);
router.get("/users/:id", user_controller_js_1.getUserById);
router.post("/users", user_controller_js_1.createUser);
router.put("/users/:id", user_controller_js_1.updateUser);
router.delete("/users/id", user_controller_js_1.deleteUser);
exports.default = router;
