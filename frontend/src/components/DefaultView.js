import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Footer from "./Footer";
import FadeIn from "react-fade-in";
import React from "react";

const DefaultView = () => {
    return (
        <FadeIn transitionDuration={750}>
            <div>

                <NavBar/>

                <HomePage/>
                <Footer />
            </div>
        </FadeIn>
    )
}

export default DefaultView