"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequalize = void 0;
const sequelize_1 = require("sequelize");
exports.sequalize = new sequelize_1.Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
});
