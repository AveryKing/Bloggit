import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {Link} from "@mui/material";
import ViewFullPostButton from "./ViewFullPostButton";
import * as React from "react";

const ProfileGridItem = ({post,app}) => {
    const visitProfile = (id) => {
        app('profile',id)

    }
    return (
        <Grid item key={post.id} xs={12} md={5} lg={5}>

            <Card sx={{marginBottom:'20px'}}>
                <div className="card-header">
                    <h5 className="mb-0">{post.title}</h5>
                    <h6 className="mb-0">By {post.author}</h6>
                </div>
                <div className="card-body">

                    {post.content.substr(0,300)}....
                    <br />
                    <ViewFullPostButton id={post.id} />
                </div>  </Card>

        </Grid>
    )
}

export default ProfileGridItem