import React, {useState} from 'react'
import ReactDOM from "react-dom";
import {TextField, Typography} from "@mui/material";
import userService from '../services/users'
import Snackbar from './Snackbar'
import NUE from './NewUserExperience'
import FadeIn from "react-fade-in";
import Button from "@mui/material/Button";
const SignUpForm = ({close}) => {

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const addUser = (username,password) => {
        //TODO: Make usernames case insensitive, disallow non-alpha characters
        userService.getAll()
            .then(response => {
                if(Object.values(response).some(x => x.username === username)) {
                    let errResponse = `The username '${username}' is already taken.`
                    return ReactDOM.render(<Snackbar type="error" text={errResponse} />, document.getElementById('snackbar'))
                } else {
                    userService.create({username:username,password:password})
                        .then(response => {
                            NUE.welcomeNewUser(username,()=>{close()})
                        })
                }})
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        /**
         TODO: only allow alpha chars in username, disallow in-use names
         */

        let username = document.getElementById("uname").value
        let password = document.getElementById("password").value

        password.length >= 6 ? setPasswordError(false) : setPasswordError(true)
        username.length >= 4 ? setUsernameError(false) : setUsernameError(true)

        if(password.length >= 6 && username.length >= 4) {
            addUser(username,password)
        }
    }
    return (
    <FadeIn>
        <section className="login-clean">
            <form method="post" onSubmit={onFormSubmit}>
                <h2 className="visually-hidden">Login Form</h2>

                <div className="illustration">

                    <i className="fas fa-user-plus" style={{width: "1", color: "#9c27b0", fontSize: "70px"}}/>
                    <center>
                        <Typography style={{color:"#575757"}}variant="h5">Sign Up</Typography>
                    </center>
                </div>

                <div className="mb-3"> <TextField fullWidth id="uname" label="Username" variant="filled"
                                             />
                    {usernameError ? <small className="form-text text-danger">Your username must be at least 4 characters</small> : null}
                </div>
                <div className="mb-3"><TextField fullWidth id="password" label="Password" variant="filled" type="password"
                />
                    {passwordError ? <small className="form-text text-danger">Your password must be at least 6 characters</small> : null}
                </div>
                <div className="mb-3">
                    <Button fullWidth color='secondary' variant='contained' type="submit"
                            style={{background: "#9c27b0"}}>Sign Up
                    </Button>
                </div>
                <a className="forgot" href="#">Already have an account? Click here to login!</a>
            </form>
        </section>
        </FadeIn>

    )
}

export default SignUpForm