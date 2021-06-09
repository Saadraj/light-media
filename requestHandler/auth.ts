import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import User from "../models/User";

const { serverRuntimeConfig } = getConfig();

interface cook {
    name: string;
    id: string;
    email: string;
}
const auth = async (req: NextApiRequest, res: NextApiResponse, next) => {
    try {
        if (!req.cookies["lm-auth"]) {
            res.redirect("/login");
            return
        }
        const temp = jwt.verify(
            req.cookies["lm-auth"],
            serverRuntimeConfig.JWT_SECRETE_KEY
        ) as cook;
        const user = await User.findOne({ email: temp?.email });
        if (!user) {
            res.redirect("/login");
        }
        next();
    } catch (err) {
        res.redirect("/login");
    }
};

export default auth;
