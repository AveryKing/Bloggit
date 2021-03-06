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
import postService from './services/posts'
import ProfileView from "./components/ProfileView";
import SettingsView from './components/SettingsView'
const App = ({  userObj= null}) => {
    const [user, setUser] = useState(null)
    const [mode, setMode] = useState('default')
    const [profile, setProfile] = useState(null)
    const updateAppMode = (newMode,profileToVisit) => {
        setProfile(profileToVisit)
        setMode(newMode)

    }

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('bloggitUser')
        if(loggedUserJSON && mode != 'loading') {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            postService.setToken(user.token)
            setMode('loggedIn')

        }


    }, [])
    if(mode === 'loading') {
        return (
            <LoadingView />

        )
    } else if(mode === 'default') {

        return (
                <DefaultView app={updateAppMode}/>
        )
        //Homescreen for logged in
    } else if(mode === 'loggedIn') {

        return (
            <LoggedInView user={user} app={updateAppMode}/>
        )
    } else if(mode === 'profile') {
        return (
            <ProfileView id={profile} user={user} app={updateAppMode}/>
        )
    } else if(mode === 'settings') {
        return (
            <SettingsView user={user} app={updateAppMode} />
        )
    }



}

export default App