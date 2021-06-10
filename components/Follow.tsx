import {
    Box,
    Button,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        follow: {
            border: ".1rem solid #333",
            borderRadius: "1rem",
            backgroundColor: "#f7f7f7",
        },
        user: {
            padding: ".5rem .4rem",
            borderBottom: ".1rem solid #333",
            "&:first-child": {
                borderBottom: "1px solid #555",
            },
            "&:last-child": {
                borderBottom: "none",
            },
        },
        btn: {
            backgroundColor: "#002345",
            color: "#f7f7f7",
            borderRadius: ".8rem",
            textTransform: "capitalize",
            padding: ".2rem .5rem",
            "&:hover": {
                backgroundColor: "#002456",
                color: "#f7f7f7",
            },
        },
        name: {
            textTransform: "capitalize",
        },
    })
);

const Follow = () => {
    const classes = useStyles();
    const [suggest, setSuggest] = React.useState([]);
    const router = useRouter();

    React.useEffect(() => {
        axios
            .get("api/follow")
            .then((res) => {
                setSuggest(res.data.data);
            })
            .catch((err) => {
                router.push('/login')
            });
    }, []);

    return (
        <Box p={3}>
            <Box className={classes.follow}>
                <Typography variant="h6" className={classes.user}>
                    Follow Now
                </Typography>

                <Grid container>
                    {suggest?.map((v) => (
                        <Grid
                            item
                            container
                            xs={12}
                            justify="space-between"
                            className={classes.user}
                            key={v}
                        >
                            <Box display="flex">
                                <img
                                    src="/img/user.png"
                                    alt="suggested user"
                                    height="40rem"
                                    width="50rem"
                                />
                                <Box>
                                    <Typography variant='h5' className={classes.name}>
                                        {v ||'dolar'}
                                    </Typography>
                                    <Typography variant='h5'>@{v}</Typography>
                                </Box>
                            </Box>
                            <Button
                                variant="contained"
                                // size="small"
                                className={classes.btn}
                            >
                                Follow
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Follow;
