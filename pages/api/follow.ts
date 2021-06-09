import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connectDB from "../../db/index";
import auth from "../../requestHandler/auth";

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(auth)
    .get(async (req, res, next) => {
        res.json({
            message: "success",
            success: true,
            data: "Lorem ipsum dolor sit amet consectetur adipisicing".split(
                " "
            ),
        });
    });

export default connectDB(handler);
