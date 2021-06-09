import {
    Box,
    Button,
    createStyles,
    Grid,
    Icon,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            verticalAlign: "middle",
            paddingRight: theme.spacing(2),
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
        menu: {
            cursor: "pointer",
            transition: "all .6s",
            "&:hover": {
                backgroundColor: "#ededed",
                borderBottom: ".1rem solid #333",
            },
        },
        bg: {
            height: "100vh",
            overflowY: "scroll",
        },
        name: {},
    })
);

const menu = [
    {
        name: "Home",
        icon: "fas fa-home",
    },
    {
        name: "Explore World",
        icon: "fab fa-slack-hash",
    },
    {
        name: "Notifications",
        icon: "fas fa-bell",
    },
    {
        name: "Messages",
        icon: "far fa-comments",
    },
    {
        name: "Communities",
        icon: "fas fa-users",
    },
    {
        name: "Business",
        icon: "far fa-handshake",
    },
    {
        name: "Profile",
        icon: "far fa-user",
    },
    {
        name: "More",
        icon: "fas fa-ellipsis-h",
    },
];

const LeftSidebar = ({ userInfo }) => {
    const classes = useStyles();

    useEffect(() => {
        const node = loadCSS(
            "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
            document.querySelector("#font-awesome-css")
        );
        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    return (
        <div className={classes.bg}>
            <Box pt={8} pb={5}>
                <Grid container>
                    <img
                        src="/img/user.png"
                        alt="User"
                        height="50rem"
                        width="70rem"
                    />
                    <Box>
                        <Typography variant="h4" className={classes.name}>
                            {userInfo.name}
                        </Typography>
                        <Typography variant="h4" className={classes.name}>
                            @{userInfo.name}
                        </Typography>
                    </Box>
                </Grid>
            </Box>
            <Box pl={2} pr={2}>
                <Grid container spacing={1}>
                    {menu.map((v) => (
                        <Grid
                            item
                            xs={12}
                            className={classes.menu}
                            key={v.name}
                        >
                            <Typography variant="h6">
                                <Typography
                                    component="span"
                                    className={classes.icon}
                                >
                                    <Icon className={`${v.icon}`} />
                                </Typography>
                                {v.name}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <Box pt={5} pb={5}>
                    <Button
                        variant="contained"
                        className={classes.btn}
                        fullWidth
                    >
                        Post
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default LeftSidebar;
