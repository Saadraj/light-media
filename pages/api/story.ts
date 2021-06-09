import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connectDB from "../../db/index";
import auth from "../../requestHandler/auth";

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(auth)
    .get(async (req, res, next) => {
        res.json({
            success: true,
            data: "create a story,Lorem,ipsum ,dolor ,sit, amet ,consectetur, adipisicing".split(",")
        });
    });

export default connectDB(handler);
