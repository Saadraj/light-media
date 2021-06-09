import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connectDB from "../../db/index";
import auth from "../../requestHandler/auth";

const post = [
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 6)+1
        ],
        image: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        post: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        min: Math.round(Math.random() * 60),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 6)+1
        ],
        image: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        post: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        min: Math.round(Math.random() * 60),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 6)+1
        ],
        image: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        post: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        min: Math.round(Math.random() * 60),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 6)+1
        ],
        image: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        post: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        min: Math.round(Math.random() * 60),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 6)+1
        ],
        image: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        post: Boolean("0 1".split(" ")[Math.round(Math.random() * 2)]),
        min: Math.round(Math.random() * 60),
    },
];

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(auth)
    .get(async (req, res, next) => {
        res.json({
            success: true,
            data: post
        });
    });

export default connectDB(handler);
