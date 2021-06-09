import {
    Box,
    createStyles,
    InputBase,
    makeStyles,
    Theme,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import Follow from "./Follow";
import Trending from "./TrendingNow";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: "relative",
            borderRadius: '.5rem',
            border:'.1rem solid #333',
            backgroundColor: fade(theme.palette.common.white, 0.85),
            "&:hover": {
                backgroundColor: fade(theme.palette.common.white, 1),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch",
            },
        },
        bg:{
            height:'100vh',
            overflowY:'scroll'
        }
    })
);

const RightSidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.bg}>
            <Box pt={2}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>
            </Box>
            <Follow/>
            <Trending/>
        </div>
    );
};

export default RightSidebar;
