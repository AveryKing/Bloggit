import React, {useState} from "react";
import {Box, Modal} from "@mui/material";
import NewPost from "./NewPost";
import ReactDOM from "react-dom";

const NewPostModal = () => {
    const [open,setOpen] = useState(true)

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

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>

                <NewPost handleClose={handleClose} />

            </Box>
        </Modal>
    )
}

export default NewPostModal