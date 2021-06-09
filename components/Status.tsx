import {
    Button,
    createStyles,
    FormControl,
    Grid,

    makeStyles,
    TextField,
    Theme
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

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
            backgroundColor: "#dedede",
        },
        btn: {
            backgroundColor: "#002345",
            color: "#f7f7f7",
            borderRadius: ".8rem",
            "&:hover": {
                backgroundColor: "#002456",
                color: "#f7f7f7",
            },
        },
    })
);

const Status = () => {
    const classes=useStyles()

    return (
        <Grid container justify='space-around'>
            <Grid item xs={1}>
                <Image
                    src="/img/user.png"
                    alt="suggested user"
                    height="30rem"
                    width="50rem"
                />
            </Grid >
            <Grid item xs={9}>
                <FormControl fullWidth >
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        placeholder='What are you thinking,'
                        rows={4}
                    /></FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth >
                <Button variant="contained" className={classes.btn} fullWidth>
                        Post
                    </Button>
                    </FormControl>
            </Grid>
        </Grid>
    );
};

export default Status;
