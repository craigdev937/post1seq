import Sequelize from "sequelize";

export const dBase = new Sequelize(
    process.env.DATABASE_URL
);



