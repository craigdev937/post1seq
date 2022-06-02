import express from "express";
import { FRIENDS } from "../controllers/friendCon.js";

export const friendRt = express.Router();
    friendRt.post("/", FRIENDS.Create);
    friendRt.get("/", FRIENDS.FetchAll);
    friendRt.get("/:id", FRIENDS.GetOne);
    friendRt.put("/:id", FRIENDS.Update);
    friendRt.delete("/:id", FRIENDS.Delete);
    


