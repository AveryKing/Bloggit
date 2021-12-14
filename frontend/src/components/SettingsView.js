import FadeIn from "react-fade-in";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Footer from "./Footer";
import React from "react";
import Settings from "./Settings";

const SettingsView = ({app,user}) => {
    return (

            <div>

                <NavBar app={app} loggedIn={true} />
                <FadeIn >
                <Settings user={user} app={app} />
                </FadeIn>
                <Footer />
            </div>

    )
}

export default SettingsView