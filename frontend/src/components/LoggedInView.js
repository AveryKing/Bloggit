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

            <div>

                <NavBar app={app} loggedIn={true} />
                <FadeIn >
                <HomePage app={app} loggedIn={true} user={user} />
                </FadeIn>
                <Footer />
            </div>


)
}

export default LoggedInView