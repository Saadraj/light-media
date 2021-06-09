import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import getConfig from "next/config";
import auth from "../../requestHandler/auth";

const { serverRuntimeConfig } = getConfig();

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(auth)
    .get(async (req, res) => {
        res.json({ message: "aaa" });
    });
export default handler;
