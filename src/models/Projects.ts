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
    },
    deliverydate: {
        type: DataTypes.STRING
    }
},{timestamps: false})

Projects.hasMany(Task, {
    foreignKey: "projectid",
    sourceKey: "id"
});

Task.belongsTo(Projects,{
    foreignKey: "projectid",
    targetKey: "id"
})

