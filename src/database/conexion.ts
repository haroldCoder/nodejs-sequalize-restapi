import {Sequelize} from "sequelize";

export const sequalize = new Sequelize({
    host: process.env.POSTGRES_HOST!,
    dialect: 'postgres',
    port: parseInt(process.env.POSTGRES_PORT!),
    database: process.env.POSTGRES_DB!,
    username: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!
})

