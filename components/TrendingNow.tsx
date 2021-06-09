import {
    Box,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        trending: {
            border: ".1rem solid #333",
            borderRadius: "1rem",
            backgroundColor: "#f7f7f7",
        },
        user: {
            padding: ".2rem 1rem",
            borderBottom: ".1rem solid #333",
            "&:first-child": {
                padding: ".8rem 1rem",
                borderBottom: "1px solid #555",
            },
            "&:last-child": {
                borderBottom: "none",
            },
        },
        name: {
            textTransform: "capitalize",
        },
        count: {
            fontSize: ".1rem",
        },
    })
);


const Trending = () => {
    const classes = useStyles();

    const [suggest, setSuggest] = React.useState([]);
    const router = useRouter();

    React.useEffect(() => {
        axios
            .get("api/trend")
            .then((res) => {
                setSuggest(res.data.data);
            })
            .catch((err) => {
                router.push('/login')
            });
    }, []);

    return (
        <Box p={3}>
            <Box className={classes.trending}>
                <Typography variant="h6" className={classes.user}>
                    Trending Now
                </Typography>

                <Grid container>
                    {suggest?.map((v) => (
                        <Grid item xs={12} className={classes.user} key={v}>
                            <Typography className={classes.count}>
                                {v.type} trending
                            </Typography>
                            <Typography className={classes.name} variant="h6">
                                #{v.name}
                            </Typography>
                            <Typography className={classes.count}>
                                {v.count}K
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Trending;
