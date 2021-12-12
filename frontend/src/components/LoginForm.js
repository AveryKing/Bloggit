import React, {useState} from 'react'
import {Typography} from "@mui/material";
import FadeIn from "react-fade-in";

const LoginForm = () => {

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const addUser = (username,password) => {
        alert(`welcome, ${username}`)
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
                    <i className="fas fa-sign-in-alt" style={{width: "1", color: "rgb(71,109,244)", fontSize: "70px"}}/>
                <center>
                    <Typography style={{color:"#575757"}}variant="h4">Login</Typography>
                </center>
                </div>

                <div className="mb-3"><input className="form-control" id="uname" type="text" name="uname" placeholder="Username" />

                </div>
                <div className="mb-3"><input className="form-control" id="password" type="text" name="password"
                                             placeholder="Password" />

                </div>
                <div className="mb-3">
                    <button className="btn btn-primary d-block w-100" type="submit"
                             style={{background: "rgb(71,109,244)"}}>Login
                    </button>
                </div>
                <a className="forgot" href="#">Don't have an account? Click here to sign up!</a>
            </form>
        </section>
    </FadeIn>

)
}

export default LoginForm