import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Footer from "./Footer";
import FadeIn from "react-fade-in";
import React from "react";
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";
import ErrorModal from "./ErrorModal";

const LoggedInView = ({user,app}) => {



    return (
        <FadeIn transitionDuration={750}>
            <div>

                <NavBar app={app} loggedIn={true} />

                <HomePage app={app} loggedIn={true} user={user} />
                <Footer />
            </div>
        </FadeIn>

)
}

export default LoggedInView