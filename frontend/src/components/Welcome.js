import React from "react";
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";
import ErrorModal from "./ErrorModal";
import LoginModal from "./LoginModal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
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
                        <Typography variant='h4' className="text-center">Welcome!</Typography>
                        <p className="text-center">Bloggit is a website where anyone is welcome to share their thoughts.<br/> Click below to create an account!</p>
                    </div>
                    <div className="buttons">
                        <Button color='secondary' onClick={showNewPostModal} size='large' variant='contained'>
                            Sign Up
                        </Button></div>
                </div>
            </section>
        )
    } else {
        return (

            <section className="highlight-clean">

                <div className="container">
                    <div className="intro">
                        <center>
                        <TextField
                            id="filled-multiline-static"
                            label="Write a new post..."
                            multiline
                            fullWidth
                            borderRadius='50px'
                            rows={4}

                            variant="filled"
                        />
                        </center>

                    </div>

                    <div className="buttons">
                        <Button color='primary' onClick={showNewPostModal} size='large' variant='contained'>
                            New Post
                        </Button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Welcome