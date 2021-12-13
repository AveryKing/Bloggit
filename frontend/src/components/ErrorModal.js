import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";
import {IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";
import LoginModal from "./LoginModal";
//oooo
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

const ErrorModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        ReactDOM.unmountComponentAtNode(document.getElementById("modal"))
    }

    const openLogin = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("modal"))
        ReactDOM.render(<LoginModal display='1' />, document.getElementById("modal"))
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
                        Error
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You must be <a href="#" onClick={openLogin}>logged in</a> to create a new post.
                    </Typography>
                </Box>
            </Modal>

    );
}

export default ErrorModal