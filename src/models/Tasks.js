"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const conexion_1 = require("../database/conexion");
const sequelize_1 = require("sequelize");
exports.Task = conexion_1.sequalize.define('task', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    done: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: false
});
