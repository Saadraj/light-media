import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import axios from "axios";
import React from "react";
import Friends from "./Friends";
import Posts from "./Posts";
import Post from "./Status";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "#002345",
        },
        title: {
            padding: ".2rem 1rem",
            borderRadius: ".5rem",
            border: ".1rem solid #f7f7f7",
        },
        center: {
            display: "grid",
            width: "100%",
            justifyContent: "center",
        },
        bg: {
            backgroundColor: "#f7f7f7",
            height: "100vh",
            overflowY: "auto",
        },
    })
);

const post = [
    {
        name: "aaa",
        image: true,
        post: true,
    },
    {
        name: "bbb",
        image: true,
        post: 0,
    },
    {
        name: "ccc",
        image: 0,
        post: true,
    },
    {
        name: "ddd",
        image: 1,
        post: 0,
    },
    {
        name: "eee",
        image: true,
        post: true,
    },
];

const Content = () => {
    const classes = useStyles();
    const [suggest, setSuggest] = React.useState([]);
    const router = useRouter();

    React.useEffect(() => {
        axios
            .get("api/post")
            .then((res) => {
                setSuggest(res.data.data);
            })
            .catch((err) => {
                router.push('/login')
            });
    }, []);
    return (
        <Box p={2} pt={4} className={classes.bg}>
            <Post />
            <Friends />
            <Box>
                {suggest?.map((v) => (
                    <Box pt={5} key={v.name}>
                        <Posts
                            userName={v.name}
                            image={v.image}
                            post={v.post}
                            min={v.min}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Content;
