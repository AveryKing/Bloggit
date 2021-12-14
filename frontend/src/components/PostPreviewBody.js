import React from "react";
import PostModal from "./PostModal";
import ReactDOM from "react-dom";
import {Link} from "@mui/material";

const PostPreviewBody = ({content, id}) => {

    const showPost = () => {
        ReactDOM.render(<PostModal id={id} />, document.getElementById("modal"))
    }

    return (


        <div>
            <p className="card-text">
                {content.substr(0, 145)}.....
                <br/>
                <Link onClick={showPost} href="#">See Full Post</Link>
            </p>
        </div>



    )
}

export default PostPreviewBody