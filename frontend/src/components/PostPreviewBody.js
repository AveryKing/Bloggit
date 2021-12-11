import React from "react";
import PostModal from "./PostModal";
import ReactDOM from "react-dom";

const PostPreviewBody = ({content, id}) => {

    const showPost = () => {
        ReactDOM.render(<PostModal id={id} />, document.getElementById("modal"))
    }

    return (


        <div>
            <p className="card-text">
                {content.substr(0, 145)}.....
                <br/>
                <a onClick={showPost} href="#">See Full Post</a>
            </p>
        </div>



    )
}

export default PostPreviewBody