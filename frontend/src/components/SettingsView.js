import FadeIn from "react-fade-in";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Footer from "./Footer";
import React from "react";
import Settings from "./Settings";

const SettingsView = ({app,user}) => {
    return (
        <FadeIn transitionDuration={750}>
            <div>

                <NavBar app={app} loggedIn={true} />
                <Settings user={user} app={app} />
                <Footer />
            </div>
        </FadeIn>
    )
}

export default SettingsView