import ReactDOM from "react-dom";
import App from '../App'
import {CircularProgress} from "@mui/material";
import Snackbar from "./Snackbar";
import React from "react";
import OpenChatButton from "./OpenChatButton";

const welcomeNewUser = (username,close) => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))

    const userSettings = {
        username:username,
        loggedIn:true
    }

    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        ReactDOM.render(<App />, document.getElementById('root'))
        ReactDOM.render(<OpenChatButton />, document.getElementById('open-chat'))
    },2000)
    ReactDOM.render(<Snackbar type="success" text="Your account has been successfully created!" />, document.getElementById("snackbar"), () => {
        close()
    })
        ReactDOM.render(<App mode="loading" settings={userSettings} />, document.getElementById("root"))
 //   ReactDOM.render(<newUserComponent /> ,document.getElementById('newUser'))
    return (
        <CircularProgress />
    )

}

const newUserComponent = () => {
    return (
        <CircularProgress />
        )

}

export default {
    welcomeNewUser
}