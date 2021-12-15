import ReactDOM from "react-dom";
import PostModal from "./PostModal";
import React from "react";
import ErrorModal from "./ErrorModal";
import LoginModal from './LoginModal'
import Badge from '@mui/material/Badge';
import notificationsService from '../services/notifications'

import {
    ArrowDropDownCircle, ArrowDropDownCircleOutlined,
    Logout,
    LogoutOutlined,
    MailOutlined,
    Notifications,
    NotificationsOutlined, PersonOutlined,
    SettingsOutlined
} from "@mui/icons-material";
import {ButtonGroup, IconButton} from "@mui/material";
import App from "../App";
import Snackbar from "./Snackbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
const NavBar = ({loggedIn = false, app}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notificationCount, updateNotificationCount] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

React.useEffect(() => {

    //TODO: add auth
    notificationsService.getNotificationCount(JSON.parse(localStorage.getItem('bloggitUser')).userId)
        .then(count => {
            updateNotificationCount(count)
        })
})
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

    const renderApp = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        ReactDOM.render(<App />, document.getElementById('root'))
    }

    const openMyProfile = () => {

        handleClose()

        app('profile',JSON.parse(localStorage.getItem('bloggitUser')).userId)
    }

    const openSettings = () => {
        handleClose()
        app('settings')
    }


    if(!loggedIn) {
        return (

            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
                <div className="container"><a onClick={renderApp} className="navbar-brand" href="#"><img src='http://localhost:3001/img/logo4.png' width='150px' /></a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                        className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>

                        </ul>
                        <span id="nav-buttons-nouser" className="navbar-text actions">

                            <Button onClick={openLogin} variant='contained' color='primary'>Login</Button>&emsp;
                            <Button onClick={openSignUp} variant='contained' color='primary'>Sign Up</Button>

                        </span>
                    </div>
                </div>
            </nav>

        )
    } else {
        return (
<div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={openMyProfile}><PersonOutlined /> &nbsp;Profile</MenuItem>
                <MenuItem onClick={openSettings}><SettingsOutlined /> &nbsp;Settings</MenuItem>
                <MenuItem onClick={logout}><LogoutOutlined /> &nbsp;Logout</MenuItem>
            </Menu>
            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">

                <div className="container"><a onClick={renderApp} className="navbar-brand" href="#"><img src='http://localhost:3001/img/logo4.png' width='150px' /></a>
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
                            <IconButton className="navIcon" href="#"><Badge color="primary" badgeContent={null}><MailOutlined /></Badge></IconButton>
                            <IconButton className="navIcon" href="#"><Badge color="primary" badgeContent={notificationCount}><NotificationsOutlined /></Badge></IconButton>
                            <IconButton onClick={handleClick} className="navIcon" href="#"><ArrowDropDownCircleOutlined /></IconButton>
                           

                        </span>
                    </div>
                </div>
            </nav>
</div>
        )
    }

}

export default NavBar