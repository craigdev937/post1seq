import { Friends } from "../models/Friends.js";

class FriendsClass {
    Create = async (req, res, next) => {
        const { first, last, age, info } = req.body;
        try {
            let newFriend = await Friends.create({
                first, last, age, info
            }, {
                fields: ["first", "last", "age", "info"]
            });
            return res.status(200).json(newFriend);
        } catch (error) {
            res.status(500).json(res.statusText);
            next(error);
        }
    };

    FetchAll = async (req, res, next) => {
        try {
            const friends = await Friends.findAll({
                attributes: ["id", "first", "last", "age", "info"]
            });
            res.json(friends);
        } catch (error) {
            res.status(500).json(res.statusText);
            next(error);
        }
    };    
};

export const FRIENDS = new FriendsClass();






