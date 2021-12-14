import ReactDOM from "react-dom";
import PostModal from "./PostModal";
import React from "react";
import ErrorModal from "./ErrorModal";
import LoginModal from './LoginModal'
import Badge from '@mui/material/Badge';

import {
    ArrowDropDownCircle, ArrowDropDownCircleOutlined,
    Logout,
    LogoutOutlined,
    MailOutlined,
    Notifications,
    NotificationsOutlined,
    SettingsOutlined
} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import App from "../App";
import Snackbar from "./Snackbar";
const NavBar = ({loggedIn = false}) => {
    const openLogin = () => {
        ReactDOM.render(<LoginModal display="1" />, document.getElementById("modal"))
    }

   const openSignUp = () => {
        ReactDOM.render(<LoginModal display="2" />, document.getElementById("modal"))
    }

    const logout =  () => {

         window.localStorage.removeItem('bloggitUser')
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        ReactDOM.render(<App />, document.getElementById('root'))
        ReactDOM.unmountComponentAtNode(document.getElementById('snackbar'))
        ReactDOM.render(<Snackbar type="success" text={"You have been logged out."} />, document.getElementById('snackbar'))


    }

    if(!loggedIn) {
        return (

            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
                <div className="container"><a className="navbar-brand" href="#">Bloggit</a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                        className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>

                        </ul>
                        <span id="nav-buttons-nouser" className="navbar-text actions"> <a onClick={openLogin} className="login" href="#">Log In</a><a
                            onClick={openSignUp} className="btn btn-light action-button" role="button" href="#">Sign Up</a></span>
                    </div>
                </div>
            </nav>

        )
    } else {
        return (

            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
                <div className="container"><a className="navbar-brand" href="#">Bloggit</a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                        className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>

                        </ul>
                        <span className="navbar-text actions">
                            <IconButton className="navIcon" href="#"><Badge color="primary" badgeContent={2}><MailOutlined /></Badge></IconButton>
                            <IconButton className="navIcon" href="#"><Badge color="primary" badgeContent={4}><NotificationsOutlined /></Badge></IconButton>
                            <IconButton className="navIcon" href="#"><ArrowDropDownCircleOutlined /></IconButton>
                            <IconButton onClick={logout} className="navIcon" href="#"><LogoutOutlined /></IconButton>

                        </span>
                    </div>
                </div>
            </nav>

        )
    }

}

export default NavBar