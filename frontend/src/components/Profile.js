import Typography from "@mui/material/Typography";
import {Avatar, ButtonGroup, Container, Grid, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import UserPosts from "./UserPosts";
import Button from "@mui/material/Button";
import {ArrowDownwardOutlined, KeyboardArrowDown} from "@mui/icons-material";
import Card from "@mui/material/Card";
import PostPreview from "./PostPreview";
import ProfilePost from "./ProfilePost";
import PostGrid2 from "./PostGrid2";
import * as React from "react";

const Profile = ({user,self=false}) => {

    if(!self) {
        return (


  <div class='container-fluid'>
      <center>

                            <Box xs={12}
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-around',

                                    zIndex: -1,
                                    height: 200,
                                    borderRadius: 4,
                                    backgroundColor: '#737776',
                                    '&:hover': {
                                        backgroundColor: '#7F807F',
                                        opacity: 1,
                                    },
                                }}
                            >
                                <br/> <br/>
                                <Avatar
                                    alt="Avery King"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{width: 100, height: 100}}
                                />

                                <div >
                                    <Typography variant="h5" color="white">
                                        Avery King

                                    </Typography>
                                    <ButtonGroup sx={{color:'secondary', position:'relative',left:'200px',bottom:'32px'}} variant="contained" aria-label="outlined primary button group">
                                        <Button variant='contained' size='small'  color='secondary'>Add friend</Button>
                                        <Button variant='contained' size='small' color='secondary'>Message</Button>
                                        <Button size='small' color='secondary'><KeyboardArrowDown /></Button>
                                    </ButtonGroup>
                                </div>



                            </Box>

</center>


    <PostGrid2 type='profile'/>



        </div>



        )
    }
    else {
        return (
            <div>self!!!</div>
        )
    }
}

export default Profile