import { sequalize } from "../database/conexion";
import {DataTypes} from 'sequelize';

export const Task = sequalize.define('task',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

},{
    timestamps: false
})