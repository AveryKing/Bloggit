import React, {useState} from "react";
import {Box, Modal} from "@mui/material";
import NewPost from "./NewPost";
import ReactDOM from "react-dom";
import LoginForm from './LoginForm'
import SignUpForm from "./SignUpForm";
import FadeIn from "react-fade-in";
const LoginModal = ({display}) => {

    /**
     * TODO: make box dimensions appropriate
     */
    const [open,setOpen] = useState(true)

    const [displayType, setDisplayType] = useState(1)
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        ReactDOM.unmountComponentAtNode(document.getElementById("modal"))
    }
    const modalStyle = {
        position: 'relative',
        top: '45%',
        left: '50%',
        bottom:'10%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '35%',
        bgcolor: '',
        p: 4,
    };



    if(display === "1") {
        return (
            <FadeIn transitionDuration={750}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>

                    <LoginForm close={handleClose} />

                </Box>
            </Modal>
            </FadeIn>
        )
    }
    else {
        return (
            <FadeIn transitionDuration={750}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>

                    <SignUpForm close={handleClose}/>

                </Box>
            </Modal>
            </FadeIn>
                    )
    }
}

export default LoginModal