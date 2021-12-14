import React from "react";
import PostModal from "./PostModal";
import ReactDOM from "react-dom";
import {Link} from "@mui/material";
import Typography from "@mui/material/Typography";

const PostPreviewBody = ({content, id}) => {

    const showPost = () => {
        ReactDOM.render(<PostModal id={id} />, document.getElementById("modal"))
    }

    return (


        <div>
            <Typography className="card-text">
                {content.substr(0, 145)}.....
                <br/>
                <Link onClick={showPost} href="#">See Full Post</Link>
            </Typography>
        </div>



    )
}

export default PostPreviewBody