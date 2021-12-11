import PostPreview from "./PostPreview";
import React, {useState, useEffect} from 'react'
import {CircularProgress, Typography} from "@mui/material";
import postService from '../services/posts'

const PostGrid = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        postService.getAll()
            .then((response) => {
                setPosts(response)
            })
    }, [])

    if(posts.length === 0) {
        return (
            <div className="container">
                <center>
                    <CircularProgress />
                </center>
            </div>
        )
    }
    return (
        <div className="container">
                    {posts.map(x =>  <div style={{alignItems:"center",marginTop:"9px",marginLeft:"9px",display:"inline-flex"}}><PostPreview id={x.id}/> </div>)}
        </div>
    )
}


export default PostGrid