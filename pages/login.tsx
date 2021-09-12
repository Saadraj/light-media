import {
    Box,
    Button,
    Container,
    createStyles,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { loginValidationSchema } from "../validationSchema/login";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "25ch",
            },
        },
        error: {
            color: "tomato",
            paddingLeft: theme.spacing(1),
        },
        link: {
            color: theme.palette.primary.main,
            textDecoration: "none",
            "&:hover": {
                textDecoration: "underline",
            },
        },
        btn: {
            backgroundColor: "#262626",
            color: "#f7f7f7",
            "&:hover": {
                backgroundColor: "#333",
                color: "#f7f7f7",
            },
        },
        forgot: {
            // fontFamily: "nexalight",
            color: "#1877f2",
            paddingTop: theme.spacing(5),
        },
        paddingTop: {
            paddingTop: theme.spacing(5),
        },
    })
);

const initialValues = {
    email: "",
    password: "",
};
const Login = () => {
    const classes = useStyles();
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const submitSignUp = async (values: {
        email: string;
        password: string;
    }) => {
        try {
            const validateData = await loginValidationSchema.validate(values);
            const res = await axios.post("/api/login", validateData);
            if (res.data.success) {
                router.push("/");
            } else {
                setErrorMessage(res.data.message);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };
    return (
        <Box
            style={{
                backgroundColor: "#eee",
                height: "100vh",
                display: "grid",
                placeItems: "center",
            }}
        >
            <Container maxWidth="lg">
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Image
                            src="/img/login-image.png"
                            width="500rem"
                            height="600rem"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box p={11}>
                            <Paper
                                elevation={0}
                                style={{
                                    padding: "20px",
                                }}
                            >
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={loginValidationSchema}
                                    onSubmit={(value) => submitSignUp(value)}
                                >
                                    {({ isSubmitting, isValidating }) => (
                                        <Form>
                                            {errorMessage && (
                                                <Alert
                                                    severity="error"
                                                    onClose={() => {
                                                        setErrorMessage("");
                                                    }}
                                                >
                                                    {errorMessage}
                                                </Alert>
                                            )}
                                            <FormControl
                                                fullWidth
                                                margin="normal"
                                            >
                                                <Field
                                                    as={TextField}
                                                    name="email"
                                                    placeholder="Email address or phone number"
                                                    variant="outlined"
                                                />
                                                <ErrorMessage name="email">
                                                    {(msg) => (
                                                        <FormHelperText
                                                            className={
                                                                classes.error
                                                            }
                                                        >
                                                            {msg}
                                                        </FormHelperText>
                                                    )}
                                                </ErrorMessage>
                                            </FormControl>
                                            <FormControl
                                                fullWidth
                                                margin="normal"
                                            >
                                                <Field
                                                    as={TextField}
                                                    name="password"
                                                    placeholder="Password"
                                                    variant="outlined"
                                                    type="password"
                                                />
                                                <ErrorMessage name="password">
                                                    {(msg) => (
                                                        <FormHelperText
                                                            className={
                                                                classes.error
                                                            }
                                                        >
                                                            {msg}
                                                        </FormHelperText>
                                                    )}
                                                </ErrorMessage>
                                            </FormControl>
                                            <FormControl
                                                fullWidth
                                                margin="normal"
                                            >
                                                <Button
                                                    variant="contained"
                                                    className={classes.btn}
                                                    type="submit"
                                                    disabled={
                                                        isSubmitting ||
                                                        isValidating
                                                    }
                                                >
                                                    Login
                                                </Button>
                                            </FormControl>
                                        </Form>
                                    )}
                                </Formik>
                                <Typography
                                    align="center"
                                    gutterBottom
                                    variant="h4"
                                    className={classes.forgot}
                                >
                                    Forgotten password
                                </Typography>
                                <Divider />
                                <Grid
                                    container
                                    justify="center"
                                    className={classes.paddingTop}
                                >
                                    <Button
                                        variant="contained"
                                        className={classes.btn}
                                        onClick={() => {
                                            router.push("/signup");
                                        }}
                                    >
                                        create a new account
                                    </Button>
                                </Grid>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;
