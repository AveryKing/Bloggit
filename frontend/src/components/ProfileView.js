import FadeIn from "react-fade-in";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Footer from "./Footer";
import React from "react";
import Profile from './Profile'

const ProfileView = ({user,app}) => {
    return (
        <FadeIn transitionDuration={750}>
            <div>

                <NavBar loggedIn={true} />
                <Profile app={app} user='id' />
                <Footer />
            </div>
        </FadeIn>
    )
}

export default ProfileView