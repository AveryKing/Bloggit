import React, {useState} from 'react'
import postService from '../services/posts'
import ReactDOM from "react-dom";
import App from "../App";
import Snackbar from './Snackbar'
import {Button, TextField, Typography} from "@mui/material";

const NewPost = ({handleClose,user}) => {

    const [anonymous, setAnonymous] = useState(false)
    const [bodyError, setBodyError] = useState(false)
    const [titleError, setTitleError] = useState(false)

    const toggleAnonymous = () => {
        setAnonymous(!anonymous)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        let content = document.getElementById("postBody").value
        let title = document.getElementById("postTitle").value
        let author
        let anonymous
        if(document.getElementById("anonymous").checked) {
            anonymous = true
        } else {
            anonymous = false
         //   author = document.getElementById("name").value
        }

        content.length >= 150 ? setBodyError(false) : setBodyError(true)
        title.length >= 5 ? setTitleError(false) : setTitleError(true)

        if(content.length >= 150 && title.length >=5) {
            addPost(content,title,anonymous)
        }
    }

    const addPost = (content,title,author) => {
        postService.create({title: title, author: author, content: content})
            .then(response => {
                handleClose()
                ReactDOM.unmountComponentAtNode(document.getElementById("root"))
                ReactDOM.render(<App userObj={user} mode='loggedIn' />, document.getElementById("root"))
                ReactDOM.render(<Snackbar type="success" text="Your post has been created!"/>, document.getElementById("snackbar"))
            })

    }
    return (

        <section className="contact-clean">
            <form method="post" onSubmit={onFormSubmit}>
                <Typography variant='h5' className="text-center">Create a new post</Typography><br/>

                <TextField fullWidth id="postTitle" label="Post Title" variant="outlined" />

                {titleError ? <small className="form-text text-danger"><br/>Your title must be at least 5 characters long</small> : null}
                    <div className="mb-3"></div>
                    <div className="mb-3">
                        <TextField fullWidth
                            id="outlined-multiline-static"
                            label="Write your post here..."
                            multiline
                            rows={7}

                            id='postBody'

                        />

                        {bodyError ? <small className="form-text text-danger">Your post must be at least 150 characters long</small> : null}
                    </div>

                <div className="mb-3">
                    {anonymous ? <strong>You are posting anonymously<br/></strong> : null}
                    <div className="form-check">
                        <input onClick={toggleAnonymous} className="form-check-input" type="checkbox" id="anonymous" />
                        <label className="form-check-label" htmlFor="formCheck-1">
                            Post anonymously
                        </label>
                    </div>
                </div>
                    <div className="mb-3">
                        <Button variant='contained' color='primary' type="submit">post</Button>
                    </div>

            </form>
        </section>
    )
}

    export default NewPost