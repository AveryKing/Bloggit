import FadeIn from "react-fade-in";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Footer from "./Footer";
import React from "react";
import Profile from './Profile'

const ProfileView = ({user,app,id}) => {
    return (

            <div>

                <NavBar app={app} loggedIn={true} />
                <FadeIn >
                <Profile app={app} userId={id} />
                </FadeIn>
                <Footer />
            </div>

    )
}

export default ProfileView