import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ReactDOM from "react-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        ReactDOM.unmountComponentAtNode(document.getElementById("snackbar"))
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>

            <Snackbar open={open} anchorOrigin={{vertical:'bottom',horizontal:'right'}} autoHideDuration={8000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your post has been created!<br/>
                </Alert>
            </Snackbar>

        </Stack>
    );
}