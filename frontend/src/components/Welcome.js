import React from "react";
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";
import ErrorModal from "./ErrorModal";
import LoginModal from "./LoginModal";
import Typography from "@mui/material/Typography";
const Welcome = ({loggedIn=false, user}) => {
//testtttt

    const showNewPostModal = () => {
        if(loggedIn) {
            ReactDOM.render(<NewPostModal user={user}/>, document.getElementById("modal"))
        } else {
            ReactDOM.render(<LoginModal display='2' />, document.getElementById("modal"))
        }
    }

    if(!loggedIn) {
        return (

            <section className="highlight-clean">

                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Welcome!</h2>
                        <p className="text-center">Bloggit is a website where anyone is welcome to share their thoughts.<br/> Click below to create an account!</p>
                    </div>
                    <div className="buttons"><a onClick={showNewPostModal} className="btn btn-primary" role="button"
                                                href="#">Sign Up</a></div>
                </div>
            </section>
        )
    } else {
        return (

            <section className="highlight-clean">

                <div className="container">
                    <div className="intro">
                        <Typography variant='h4' className="text-center">Welcome, {user.username}.</Typography>
                        <Typography variant='h6' className="text-center">Click
                            below to make a new post.</Typography>
                    </div>
                    <div className="buttons"><a onClick={showNewPostModal} className="btn btn-primary" role="button"
                                                href="#">new post</a></div>
                </div>
            </section>
        )
    }
}

export default Welcome