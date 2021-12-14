import Typography from "@mui/material/Typography";
import {Avatar, Container} from "@mui/material";
import Box from "@mui/material/Box";
import UserPosts from "./UserPosts";

const Profile = ({user}) => {
    return (
        <div>
<center>
    <Container>
        <Box>
        <Box
            sx={{

                alignItems:'center',
                justifyContent:'space-around',
                width: 800,
                zIndex:-1,
                height: 200,
                borderRadius:4,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: 1,
                },
            }}
        >
            <br/> <br/>
            <Avatar
                alt="Avery King"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100}}
            />


                <Typography variant="h5" color="white">
                    Avery King
                </Typography>

        </Box>

      <center>
            <UserPosts />
      </center>
        </Box>
    </Container>
</center>
        </div>
    )
}

export default Profile