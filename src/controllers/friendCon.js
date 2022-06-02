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

    GetOne = async (req, res, next) => {
        const { id } = req.params;
        try {
            const friend = await Friends.findOne({
                where: { id }
            });
            return res.status(200).json(friend);
        } catch (error) {
            res.status(500).json(res.statusText);
            next(error);
        }
    };

    Update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { first, last, age, info } = req.body;
            const friend = await Friends.findByPk(id);
                friend.first = first;
                friend.last = last;
                friend.age = age;
                friend.info = info;
            await friend.save();
            return res.status(200).json(friend);
        } catch (error) {
            res.status(500).json(res.statusText);
            next(error);
        }
    };

    Delete = async (req, res, next) => {
        const { id } = req.params;
        try {
            await Friends.destroy({where: { id }});
            return res.sendStatus(204);
        } catch (error) {
            res.status(500).json("The Friend was deleted!");
            next(error);
        }
    };
};

export const FRIENDS = new FriendsClass();






