import Typography from "@mui/material/Typography";
import PostPreviewBody from "./PostPreviewBody";
import React, {useEffect, useState} from "react";
import postService from "../services/posts";

const ProfilePost = ({id}) => {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [author,setAuthor] = useState("")


    useEffect(()=> {
        postService.getPost(id)
            .then(response => {
                setTitle(response.title)
                setContent(response.content)
                setAuthor(response.author)
            })
    })
    /*

     */

    return (
        <div>


            <div className="card" style={{width:"300px"}}>
                <div className="card-header">
                    <Typography  variant='h6' >{title}</Typography>
                    <Typography variant='p' >By {author}</Typography>
                </div>
                <div className="card-body">

                    <PostPreviewBody id={id} content={content} />

                </div>
            </div>


        </div>

    )
}

export default ProfilePost