"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var user_entity_js_1 = require("../entities/user.entity.js");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'SyntaxError@404',
    database: 'express_api_ts',
    synchronize: false, // Sincroniza los cambios con la DB (ideal solo para desarrollo)
    logging: false, // Mensajes de Log (Consultas SQL)
    entities: [user_entity_js_1.User], // Entidades
    migrations: ["src/db/migrations/**/*.ts"],
    // driver:require("mysql2"),
    subscribers: []
});
