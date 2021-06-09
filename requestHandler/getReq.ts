import { NextApiRequest, NextApiResponse } from "next";
import User from "../models/User";

interface CustomNextApiRequest extends NextApiRequest {
    message1: String;
    message2: String;
    message3: String;
}
const getRequestHandler = async (req: CustomNextApiRequest, res: NextApiResponse) => {
    try {
        const data = await User.find();
        res.status(500).json({
            params: req.query,
            message1: req.message1,
            message2: req.message2,
            message3: req.message3,
            data,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default getRequestHandler;
