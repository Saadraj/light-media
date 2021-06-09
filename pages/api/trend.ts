import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import connectDB from "../../db/index";
import auth from "../../requestHandler/auth";

const post = [
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        type: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        count: Math.round(Math.random() * 1000),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        type: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        count: Math.round(Math.random() * 1000),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        type: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        count: Math.round(Math.random() * 1000),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        type: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        count: Math.round(Math.random() * 1000),
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        type: "Lorem ipsum dolor sit amet consectetur adipisicing".split(" ")[
            Math.round(Math.random() * 7)
        ],
        count: Math.round(Math.random() * 1000),
    },
];

const handler = nc<NextApiRequest, NextApiResponse>()
    .use(auth)
    .get(async (req, res, next) => {
        res.json({
            success: true,
            data: post,
        });
    });

export default connectDB(handler);
