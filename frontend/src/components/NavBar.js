import ReactDOM from "react-dom";
import PostModal from "./PostModal";
import React from "react";
import ErrorModal from "./ErrorModal";
import LoginModal from "./LoginModal";
import Badge from "@mui/material/Badge";
import notificationsService from "../services/notifications";

import {
    ArrowDropDownCircle,
    ArrowDropDownCircleOutlined,
    Logout,
    LogoutOutlined,
    MailOutlined,
    Notifications,
    NotificationsOutlined,
    PersonOutlined,
    SettingsOutlined,
} from "@mui/icons-material";
import { ButtonGroup, IconButton, ListItemText } from "@mui/material";
import App from "../App";
import Snackbar from "./Snackbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Profile from "./Profile";

const NavBar = ({ loggedIn = false, app }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const [notifications, setNotifications] = React.useState([]);
    const [notificationCount, updateNotificationCount] = React.useState(
        notifications.length
    );
    const open = Boolean(anchorEl);
    const notifsOpen = Boolean(anchorEl2);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNotifsClick = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleNotifsClose = () => {
        setAnchorEl2(null);
    };

    React.useEffect(() => {
        if (loggedIn) {
            notificationsService
                .getNotifications(
                    JSON.parse(localStorage.getItem("bloggitUser")).userId
                )
                .then((response) => {
                    response.forEach((notification) => {
                        setNotifications([...notifications].concat(notification));
                    });
                });
        }
    }, []);

    React.useEffect(() => {
        if (loggedIn) {
            notificationsService
                .getNotificationCount(
                    JSON.parse(localStorage.getItem("bloggitUser")).userId
                )
                .then((response) => {
                    updateNotificationCount(response.count);
                });
        }
    }, []);
    const openLogin = () => {
        ReactDOM.render(
            <LoginModal display="1" />,
            document.getElementById("modal")
        );
    };

    const openSignUp = () => {
        ReactDOM.render(
            <LoginModal display="2" />,
            document.getElementById("modal")
        );
    };

    const logout = () => {
        window.localStorage.removeItem("bloggitUser");
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        ReactDOM.render(<App />, document.getElementById("root"));
        ReactDOM.unmountComponentAtNode(document.getElementById("snackbar"));
        ReactDOM.render(
            <Snackbar type="success" text={"You have been logged out."} />,
            document.getElementById("snackbar")
        );
    };

    const renderApp = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        ReactDOM.render(<App />, document.getElementById("root"));
    };

    const openMyProfile = () => {
        handleClose();

        app("profile", JSON.parse(localStorage.getItem("bloggitUser")).userId);
    };

    const openSettings = () => {
        handleClose();
        app("settings");
    };

    const acceptFriendRequest = (notificationId) => {
        notificationsService.acceptRequest(notificationId).then((userAdded) => {
            handleNotifsClose();

            app("profile", userAdded);
        });
    };

    if (!loggedIn) {
        return (
            <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
                <div className="container">
                    <a onClick={renderApp} className="navbar-brand" href="#">
                        <img src="http://localhost:3000/img/logo4.png" width="150px" />
                    </a>
                    <button
                        data-bs-toggle="collapse"
                        className="navbar-toggler"
                        data-bs-target="#navcol-1"
                    >
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Categories
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                        <span id="nav-buttons-nouser" className="navbar-text actions">
              <Button onClick={openLogin} variant="contained" color="primary">
                Login
              </Button>
                            &emsp;
                            <Button onClick={openSignUp} variant="contained" color="primary">
                Sign Up
              </Button>
            </span>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <div>
                {/** Arrow dropdown menu **/}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem onClick={openMyProfile}>
                        <PersonOutlined /> &nbsp;Profile
                    </MenuItem>
                    <MenuItem onClick={openSettings}>
                        <SettingsOutlined /> &nbsp;Settings
                    </MenuItem>
                    <MenuItem onClick={logout}>
                        <LogoutOutlined /> &nbsp;Logout
                    </MenuItem>
                </Menu>

                {/** Notifications dropdown menu **/}
                <Menu
                    sx={{ position: "absolute", borderRadius: "10px" }}
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={notifsOpen}
                    onClose={handleNotifsClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    {[...notifications].reverse().map((notification) => (
                        <div>
                            <MenuItem
                                divider
                                disableGutters
                                disableRipple
                                sx={{
                                    borderRadius: "10px",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    fontSize: ".8rem",
                                    display: "block",
                                }}
                            >
                                <center>
                                    &emsp;{notification.notificationData.message}&emsp;
                                    <br />
                                    <Button
                                        onClick={() => acceptFriendRequest(notification.id)}
                                        size="small"
                                        color="primary"
                                        variant="text"
                                    >
                                        Accept
                                    </Button>
                                    <Button size="small" color="error" variant="text">
                                        Decline
                                    </Button>
                                </center>
                            </MenuItem>
                        </div>
                    ))}
                </Menu>

                <nav className="navbar navbar-light navbar-expand-lg navigation-clean-button">
                    <div className="container">
                        <a onClick={renderApp} className="navbar-brand" href="#">
                            <img src="http://localhost:3000/img/logo4.png" width="150px" />
                        </a>
                        <button
                            data-bs-toggle="collapse"
                            className="navbar-toggler"
                            data-bs-target="#navcol-1"
                        >
                            <span className="visually-hidden">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navcol-1">
                            {/** Main menu buttons **/}
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Categories
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About
                                    </a>
                                </li>
                            </ul>

                            {/**Icon Buttons **/}
                            <span className="navbar-text actions">
                <IconButton className="navIcon" href="#">
                  <Badge color="primary" badgeContent={null}>
                    <MailOutlined />
                  </Badge>
                </IconButton>
                <IconButton
                    onClick={handleNotifsClick}
                    className="navIcon"
                    href="#"
                >
                  <Badge color="primary" badgeContent={notificationCount}>
                    <NotificationsOutlined />
                  </Badge>
                </IconButton>
                <IconButton onClick={handleClick} className="navIcon" href="#">
                  <ArrowDropDownCircleOutlined />
                </IconButton>
              </span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
};

export default NavBar;
