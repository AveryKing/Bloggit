import FadeIn from "react-fade-in";
import NavBar from "./NavBar";
import {CircularProgress, Typography} from "@mui/material";
import Footer from "./Footer";
import React from "react";

const LoadingView = () => {

    return (
        <FadeIn>
            <div>
                <NavBar />  <center>

                <Typography variant="h6">
                    Loading...
                </Typography> <br />
                <CircularProgress /></center> <br /><br /><br /><br />
                <Footer />
            </div>
        </FadeIn>
    )
}

export default LoadingView