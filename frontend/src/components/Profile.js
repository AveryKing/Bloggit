import Typography from "@mui/material/Typography";
import {Avatar, ButtonGroup, Container, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import UserPosts from "./UserPosts";
import Button from "@mui/material/Button";
import {ArrowDownwardOutlined, KeyboardArrowDown} from "@mui/icons-material";

const Profile = ({user,self=false}) => {

    if(!self) {
        return (
            <div>
                <center>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Box
                                sx={{

                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    width: 800,
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
                        </Grid>

                        </Grid>




                            <center>
                                <UserPosts/>
                            </center>


                </center>
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