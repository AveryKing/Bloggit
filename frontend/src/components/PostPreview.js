import React, {useEffect, useState } from 'react'
import PostPreviewBody from "./PostPreviewBody";
import postService from '../services/posts'
const PostPreview = ({id}) => {
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
                    <h5 className="mb-0">{title}</h5>
                    <h6 className="mb-0">By {author}</h6>
                </div>
                <div className="card-body">

                        <PostPreviewBody id={id} content={content} />

                </div>
            </div>


</div>

    )
}

export default PostPreview