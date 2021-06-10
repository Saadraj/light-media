import { Grid ,Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LinkIcon from "@material-ui/icons/Link";
import MessageIcon from "@material-ui/icons/Message";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShareIcon from "@material-ui/icons/Share";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 15,
        },
        name: {
            paddingTop:theme.spacing(1.5),
            '&:last-Child':{
                paddingLeft:theme.spacing(2)
            }
        },
        icon: {
            verticalAlign: "middle",
            paddingRight: theme.spacing(2),
        },
        media: {
            height: 0,
            paddingTop: "56.25%", // 16:9
        },
        expand: {
            transform: "rotate(0deg)",
            marginLeft: "auto",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: "rotate(180deg)",
        },
        avatar: {
            backgroundColor: red[500],
        },
    })
);

export default function Posts({ userName, image, post,min }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item container spacing={5} xs={11}>
                        <img
                            src="/img/user.png"
                            alt="User"
                            height="50rem"
                            width="70rem"
                        />
                        <Typography
                            component="span"
                            variant="h4"
                            className={classes.name}
                        >
                            {userName || 'dolar'}
                        </Typography>
                        <Typography
                            component="span"
                            variant="h4"
                            className={classes.name}
                        >
                            @{userName ||'dolar'}
                        </Typography>
                        <Typography
                            component="span"
                            variant="h4"
                            className={classes.name}
                        >
                            {min} min
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton className={classes.icon}>
                            <MoreHorizIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
            {post && (
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            )}
            {image && (
                <CardMedia
                    className={classes.media}
                    image="/img/bird.png"
                    title="Paella dish"
                />
            )}
            <CardActions>
                <Grid container justify='space-between'>
                <IconButton aria-label="add to favorites">
                    <MessageIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <MoodBadIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <LinkIcon />
                </IconButton>
                </Grid>
            </CardActions>
        </Card>
    );
}
