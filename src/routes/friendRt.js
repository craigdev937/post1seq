import express from "express";
import { FRIENDS } from "../controllers/friendCon.js";

export const friendRt = express.Router();
    friendRt.post("/", FRIENDS.Create);
    friendRt.get("/", FRIENDS.FetchAll);


