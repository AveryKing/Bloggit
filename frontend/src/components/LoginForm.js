import React, {useState} from 'react'
import {TextField, Typography} from "@mui/material";
import FadeIn from "react-fade-in";
import loginService from '../services/login'
import ReactDOM from "react-dom";
import Snackbar from "./Snackbar";
import UI from '../utils/UI'
import App from "../App";
import postService from '../services/posts'
import LoadingView from "./LoadingView";
import Button from "@mui/material/Button";

const LoginForm = () => {

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const addUser = (username,password) => {
        alert(`welcome, ${username}`)
    }
    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const user = await loginService.login({
                username, password,
            })


            window.localStorage.setItem(
                'bloggitUser', JSON.stringify(user)
            )
            setUser(user)
            setUsername('')
            setPassword('')
            postService.setToken(user.token)


            ReactDOM.unmountComponentAtNode(document.getElementById("modal"))
            ReactDOM.render(<Snackbar type="success" text={"You have been logged in."} />, document.getElementById('snackbar'))

            ReactDOM.unmountComponentAtNode(document.getElementById("root"))

                ReactDOM.render(<App /> , document.getElementById('root'))

            //    ReactDOM.render(<App mode="default" userObj={user} />, document.getElementById('root'))

            return
        } catch (exception) {
            return ReactDOM.render(<Snackbar type="error" text={"The credentials you entered are invalid."} />, document.getElementById('snackbar'))
        }


    }

    return (
      <FadeIn>
        <section className="login-clean">
            <form method="post" onSubmit={handleLogin}>
                <h2 className="visually-hidden">Login Form</h2>

                <div className="illustration">
                    <i className="fas fa-sign-in-alt" style={{width: "1", color: "#9c27b0", fontSize: "70px"}}/>
                <center>
                    <Typography style={{color:"#575757"}}variant="h5">Login</Typography>
                </center>
                </div>

                <div className="mb-3">
                    <TextField fullWidth id="uname" label="Username" variant="filled" value={username}
                               onChange={({target}) => setUsername(target.value)}/>

                </div>
                <div className="mb-3"> <TextField fullWidth id="password" type="password" label="Password" variant="filled" value={password}
                                                  onChange={({target}) => setPassword(target.value)}/>

                </div>
                <div className="mb-3">
                    <Button fullWidth color='secondary' variant='contained'   type="submit">

                        Login
                    </Button>

                </div>
                <a className="forgot" href="#">Don't have an account? Click here to sign up!</a>
            </form>
        </section>
    </FadeIn>

)
}

export default LoginForm