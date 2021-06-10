import {
    AppBar,
    Button,
    Container,
    createStyles,
    CssBaseline,
    Grid,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "./Loading";
import cookie from "js-cookie";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "#002345",
        },
        title: {
            backgroundColor: "#002345",
            padding: ".2rem 1rem",
            borderRadius: ".5rem",
            color: "#f7f7f7",
            border: ".1rem solid #f7f7f7",
            transition:'all 1s',
            marginRight:theme.spacing(2),
            textTransform:'capitalize',
            '&:hover':{
                backgroundColor: "#f7f7f7", 
                color: "#002345",
            }
        },
        center: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
        },
        bg: {
            backgroundColor: "#dedede",
            height: "100vh",
            overflowY: "hidden",
            paddingTop:theme.spacing(8)
        },
    })
);

const Home = ({ children }) => {
    const classes = useStyles();
    const router = useRouter();
    const [userInfo, setUserInfo] = React.useState([]);
    const [loading,setLoading] = React.useState(true);

    useEffect(() => {
        axios
        .get("api/user")
        .then((res) => {

            if(!res.data.success){
                router.push('/login')
            }else{
                setUserInfo(res.data.data);
                setLoading(false)
            }
        })
        .catch((err) => {
            router.push('/login')
        });
    }, []);
    
    const logOut=async()=>{
        await axios.post('api/logout')
        cookie.remove('lm-auth')
        router.push('/login')
    }

    if (loading) return <Loading/>
    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.center}>
                    <Button
                        variant="contained"
                        className={classes.title}
                    >
                        Home
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.title}
                        onClick={logOut}
                    >
                        LogOut
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                <Grid container className={classes.bg}>
                    <Grid item xs={3}>
                        <LeftSidebar userInfo={userInfo}/>
                    </Grid>
                    <Grid item xs={6}>
                        {children}
                    </Grid>
                    <Grid item xs={3}>
                        <RightSidebar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
