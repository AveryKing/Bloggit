import {Box, CircularProgress, Modal} from "@mui/material";
import React, {useEffect, useState} from "react";
import Post from "./Post";
import ReactDOM from "react-dom";
import FadeIn from "react-fade-in";
import postService from "../services/posts";

const PostModal = ({id}) => {
    const [open,setOpen] = useState(true)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [score, setScore] = useState(0)
    const [loadingComplete, setComplete] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        ReactDOM.unmountComponentAtNode(document.getElementById("modal"))

    }
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius:'8px',
        transform: 'translate(-50%, -50%)',
        maxWidth: '70%',

        maxHeight:'80%',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow:10,
        p: 4,
    };

    useEffect(()=> {
        postService.getPost(id)
            .then((response) => {
                setTitle(response.title)
                setAuthor(response.author)
                setContent(response.content)
                setScore(response.score)
                setComplete(true)
            })
            .catch(error => {
                setTitle("Error")
                setAuthor("???")
                setContent("Post not found")


            })
    }, [])

    return (
        <FadeIn>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                {loadingComplete ? <Post title={title} content={content} author={author} score={score} close={handleClose} id={id} />
                    : <CircularProgress /> }
            </Box>
        </Modal>
            </FadeIn>
    )
}

export default PostModal