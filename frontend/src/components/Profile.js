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
import userService from '../services/users'
import notificationService from '../services/notifications'

import * as React from "react";
import {useEffect, useState} from "react";

const Profile = ({app,userId,self=false}) => {

    if(userId === JSON.parse(localStorage.getItem('bloggitUser')).userId) {
        self = true
    }
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getUser(userId).then(user => {
            setUser(user)
           console.log(user)
        })
    },[])

    const sendFriendRequest = () => {

        const notification = {
            userFrom: JSON.parse(localStorage.getItem('bloggitUser')).userId,
            userTo: userId,
            notificationType: 'friendRequest'

        }
        notificationService.dispatch(notification)

    }
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
                                    alt={user ? user.username : null}
                                    src="/static/images/avatar/1.jpg"
                                    sx={{width: 100, height: 100}}
                                />

                                <div >
                                    <Typography variant="h5" color="white">
                                        {user ? user.username : null}

                                    </Typography>
                                    <ButtonGroup sx={{color:'secondary', position:'relative',left:'200px',bottom:'32px'}} variant="contained" aria-label="outlined primary button group">
                                        <Button variant='contained' size='small'  color='secondary' onClick={sendFriendRequest}>Add friend</Button>
                                        <Button variant='contained' size='small' color='secondary'>Message</Button>
                                        <Button size='small' color='secondary'><KeyboardArrowDown /></Button>
                                    </ButtonGroup>
                                </div>



                            </Box>

</center>


    <PostGrid2 app={app} id={userId} type='profile'/>



        </div>



        )
    }
    /*****
     *
     *
     * OWN PROFILE
     * !!!
     *
     *
     */
    else {
        return (

            <div className='container-fluid'>
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
                            alt={user ? user.username : null}
                            src="/static/images/avatar/1.jpg"
                            sx={{width: 100, height: 100}}
                        />

                        <div>
                            <Typography variant="h5" color="white">
                                {user ? user.username : null}

                            </Typography>
                            <ButtonGroup sx={{color: 'secondary', position: 'relative', left: '200px', bottom: '32px'}}
                                         variant="contained" aria-label="outlined primary button group">
                                <Button variant='contained' size='small' color='secondary'>EDIT YOUR PROFILE</Button>

                                <Button size='small' color='secondary'><KeyboardArrowDown/></Button>
                            </ButtonGroup>
                        </div>


                    </Box>

                </center>


                <PostGrid2 app={app} id={userId} type='profile'/>


            </div>
        )
    }
}

export default Profile