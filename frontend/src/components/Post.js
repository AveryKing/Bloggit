import React, {useState,useEffect} from 'react'
import postService from '../services/posts'
import {Cancel, Close, ThumbDown, ThumbUp} from "@mui/icons-material";
import {IconButton, Skeleton} from "@mui/material";

const Post = ({close,title,content,author}) => {

   // const [title, setTitle] = useState("")
 //   const [author, setAuthor] = useState("")
   // const [content, setContent] = useState("")
    const [score, setScore] = useState(0)



    const scoreUp = () => {
        setScore(score + 1)
    }

    const scoreDown = () => {
        setScore(score - 1)
    }

    return (

        <div className="container" style={{maxWidth:"100%",overflowX:"hidden"}}>

            <div className="row">

                <div className="col justify-content-center align-items-center">
                    <IconButton style={{position:"absolute",right:"2px",top:"2px"}}>
                        <Close onClick={close} />
                    </IconButton>
                    <h2 stlye={{fontWeight:"700"}}>{title}</h2>
                    <div className="d-inline-flex">
                        <h5 className="d-inline-flex justify-content-center align-items-center">By&nbsp;{author}&nbsp; &nbsp;</h5><img
                        className="d-inline-flex d-md-flex align-items-md-center rounded-circle"
                        src="img/avatar.png" width="85"
                        height="85" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr />
                        <p><br />{content}<br /><br /></p>

                    <IconButton>
                        <ThumbUp onClick={scoreUp} />
                    </IconButton>
                    <IconButton>
                        <ThumbDown onClick={scoreDown} />
                    </IconButton> <br/>
                    Score: {score}
                </div>
            </div>
        </div>
    )
}

export default Post