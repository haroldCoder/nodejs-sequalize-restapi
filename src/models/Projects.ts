import { sequalize } from "../database/conexion";
import {DataTypes, Model, ModelCtor} from 'sequelize';
import {Task} from './Tasks'

export const Projects : ModelCtor<Model<any, any>> = sequalize.define('projects',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
},{timestamps: true})

Projects.hasMany(Task, {
    foreignKey: "projectId",
    sourceKey: "id"
});

Task.belongsTo(Projects,{
    foreignKey: "projectId",
    targetKey: "id"
})
