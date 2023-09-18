"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const conexion_1 = require("../database/conexion");
const sequelize_1 = require("sequelize");
const Tasks_1 = require("./Tasks");
exports.Projects = conexion_1.sequalize.define('projects', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    priority: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    }
}, { timestamps: true });
exports.Projects.hasMany(Tasks_1.Task, {
    foreignKey: "projectId",
    sourceKey: "id"
});
Tasks_1.Task.belongsTo(exports.Projects, {
    foreignKey: "projectId",
    targetKey: "id"
});
