import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useRouter } from "next/router";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      overflowX:'auto'
    },
    image: {
        position: 'relative',
        minWidth: 130,
      height: 200,
      marginRight:5,
      backgroundColor:'#f7f7f7',
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      borderRadius:'1rem',
      padding:'0rem 1rem',
      backgroundColor:'#f7f7f7',

    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'absolute',
      bottom:0,
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

export default function Day() {
  const classes = useStyles();

  const [day, setDay] = React.useState([]);
  const router = useRouter();

    React.useEffect(() => {
        axios
            .get("api/story")
            .then((res) => {
                setDay(res.data.data);
            })
            .catch((err) => {
                router.push('/login')
            });
    }, []);

  return (
    <div className={classes.root}>
      {day?.map((image) => (
        <ButtonBase
          focusRipple
          key={image}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url('/img/day.png')`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image}
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
