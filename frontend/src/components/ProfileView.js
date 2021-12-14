import FadeIn from "react-fade-in";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Footer from "./Footer";
import React from "react";
import Profile from './Profile'

const ProfileView = ({user,app,id}) => {
    return (
        <FadeIn transitionDuration={750}>
            <div>

                <NavBar app={app} loggedIn={true} />
                <Profile app={app} userId={id} />
                <Footer />
            </div>
        </FadeIn>
    )
}

export default ProfileView