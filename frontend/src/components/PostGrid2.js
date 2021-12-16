import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProfilePost from "./ProfilePost";
import Card from "@mui/material/Card";
import PostPreviewBody from "./PostPreviewBody";
import {Link} from "@mui/material";
import {useEffect, useState} from "react";
import userService from '../services/users'
import postService from "../services/posts";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactDOM from "react-dom";
import ByLink from './ByLink'
import PostModal from "./PostModal";
import ViewFullPostButton from "./ViewFullPostButton";
import ProfileGridItem from "./ProfileGridItem";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function ColumnsGrid({type='main',app, id}) {



    const [posts, setPosts] = useState([])

    useEffect(()=> {
        postService.getAll()
            .then((response) => {
                setPosts(response)
            })
    }, [])
    if(type === 'main') {

        if(posts.length === 0) {
            return (
                <div>
                <Typography variant='h5' sx={{marginLeft:'10%',marginTop:'20px',marginBottom:'5px'}}>Recent Posts</Typography>
                <Typography variant='h6' sx={{marginLeft:'10%',marginTop:'20px',marginBottom:'5px'}}>There are currently no posts.</Typography>
                </div>
            )
        }
        return (
            <div>

                <Paper  elevation={2} variant='elevation'>
                    <Typography variant='h5' sx={{marginLeft:'10%',marginTop:'20px',marginBottom:'5px'}}>Recent Posts</Typography>
                  <center>
                        <Grid container marginLeft={1} marginRight={1}justifyContent='space-evenly'>

                            {posts.map(post => (

                                <Grid item key={post.id} xs={12} md={5} lg={5}>

                                    <Card sx={{marginBottom:'20px'}}>
                                        <div className="card-header">
                                            <h5 className="mb-0">{post.title}</h5>
                                            <h6 className="mb-0">By<ByLink id={post.user} click={()=>{ app('profile',post.user)}}/> </h6>
                                        </div>
                                        <div className="card-body">

                                            {post.content.substr(0,150)}
                                            <br />
                                            <ViewFullPostButton id={post.id} />
                                        </div>  </Card>

                                </Grid>

                            ))}

                        </Grid>

                    </center>
                </Paper>
            </div>
        ) }
        else {
            const usersPosts = posts.filter(x => x.user === id)
            return (
                <div>

                    <Paper elevation={15} variant='outlined'>
                        <Typography variant='h5' sx={{marginLeft:'10%',marginTop:'20px',marginBottom:'5px'}}>Posts</Typography>
                        <center>
                            <Grid container marginLeft={1} marginRight={1}justifyContent='space-evenly'>
                                {usersPosts.map(post => (
                                    <Grid item key={post.id} xs={12} md={5} lg={5}>
                                        <Card sx={{marginBottom:'20px'}}>
                                            <div className="card-header">
                                                <h5 className="mb-0">{post.title}</h5>
                                                <h6 className="mb-0">By <ByLink id={post.user}  click={()=>{ app('profile',post.user)}}/></h6>
                                            </div>
                                            <div className="card-body">

                                                {post.content.substr(0,150)}
                                                <br />
                                                <ViewFullPostButton id={post.id} />
                                            </div>  </Card>

                                    </Grid>

                                ))}


                            </Grid>

                        </center>
                    </Paper>
                </div>
            );
        }


}