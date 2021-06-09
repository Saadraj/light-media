import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";

function MyApp({ Component, pageProps }) {
    const theme = createMuiTheme({
        typography: {
            htmlFontSize: 10,
            fontSize: 5,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
