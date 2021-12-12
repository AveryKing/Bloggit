import React from 'react'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import 'animate.css';
import HomePage from "./components/HomePage"
import {CircularProgress, Typography} from "@mui/material";
import FadeIn from "react-fade-in";
import LoadingView from "./components/LoadingView";
import ReactDOM from "react-dom";
import OpenChatButton from "./components/OpenChatButton";

const App = ({mode = 'default', settings = {}}) => {



        switch(mode) {
                case 'loading':
                        return (
                            <LoadingView />

                        )
                case 'default':
                   /// ReactDOM.render(<OpenChatButton />, document.getElementById('open-chat'))
                        return (
                            <FadeIn transitionDuration={750}>
                            <div>
                                    <NavBar loggedIn={settings.loggedIn}/>

                                    <HomePage loggedIn={settings.loggedIn}/>
                                    <Footer />
                            </div>
                            </FadeIn>
                        )
        }




}

export default App