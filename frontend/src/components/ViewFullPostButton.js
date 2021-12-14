import Button from "@mui/material/Button";
import * as React from "react";
import ReactDOM from "react-dom";
import PostModal from "./PostModal";

const ViewFullPostButton = ({id}) => {
    const showPost = (id2) => {
        ReactDOM.render(<PostModal id={id2} />, document.getElementById("modal"))
    }

    return (
        <Button onClick={() => showPost(id)} color='secondary'>
            View Full Post
        </Button>
    )
}

export default ViewFullPostButton