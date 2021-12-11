import {Box, Modal} from "@mui/material";
import React, {useState} from "react";
import Post from "./Post";
import ReactDOM from "react-dom";

const PostModal = ({id}) => {
    const [open,setOpen] = useState(true)

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        ReactDOM.unmountComponentAtNode(document.getElementById("modal"))

    }
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '70%',
        overflow:'scroll',
        maxHeight:'80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
               <Post close={handleClose} id={id} />

            </Box>
        </Modal>
    )
}

export default PostModal