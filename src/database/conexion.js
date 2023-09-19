"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequalize = void 0;
const sequelize_1 = require("sequelize");
exports.sequalize = new sequelize_1.Sequelize({
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    port: parseInt(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
});
