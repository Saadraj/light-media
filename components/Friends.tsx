import { Box, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Day from "./Day";

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
            height: "100%",
            overflowY: "auto",
        },
    })
);

const Friends = () => {
    const classes = useStyles();
    return (
        <Box pt={2}>
            <Typography align='center' paragraph variant='h4'>Top Friends</Typography>
            <Day/>
        </Box>
    );
};

export default Friends;
