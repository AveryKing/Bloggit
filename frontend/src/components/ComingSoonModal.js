import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";
import {IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ComingSoonModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        ReactDOM.unmountComponentAtNode(document.getElementById("modal"))
    }

    const openNewPost = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("modal"))
        ReactDOM.render(<NewPostModal />, document.getElementById("modal"))
    }
    return (

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <IconButton style={{position:"absolute",right:"2px",top:"2px"}}>
                        <Close onClick={handleClose} />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Coming Soon!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        This feature is under development.<br/>
                        For now, you can <a href="#" onClick={openNewPost}>write a blog post</a> without an account!
                    </Typography>
                </Box>
            </Modal>

    );
}

export default ComingSoonModal