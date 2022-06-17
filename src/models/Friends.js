import { DataTypes } from "sequelize";
import { dBase } from "../config/database.js";

export const FriendModel = dBase.define("friends", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    first: { type: DataTypes.STRING },
    last: { type: DataTypes.STRING },
    age: { type: DataTypes.NUMBER },
    info: { type: DataTypes.STRING }
}, { timestamps: false },
{ logging: console.log });



