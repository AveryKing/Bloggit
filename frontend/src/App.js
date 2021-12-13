import React, {useEffect, useState} from 'react'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
   
import HomePage from "./components/HomePage"
import {CircularProgress, Typography} from "@mui/material";
import FadeIn from "react-fade-in";
import LoadingView from "./components/LoadingView";
import ReactDOM from "react-dom";
import OpenChatButton from "./components/OpenChatButton";
import DefaultView from "./components/DefaultView";
import LoggedInView from './components/LoggedInView'

const App = ({mode = 'default', settings = {}, userObj= null}) => {
    const [user, setUser] = useState(null)

    if(mode === 'loading') {
        return (
            <LoadingView />

        )
    } else if(mode === 'default') {

        return (
                <DefaultView />
        )
    } else if(mode === 'loggedIn') {

        return (
            <LoggedInView user={userObj} />
        )
    }



}

export default App