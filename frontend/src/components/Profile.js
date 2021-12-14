import Typography from "@mui/material/Typography";

const Profile = ({user}) => {
    return (
        <div>

            <Typography variant='h6'>
                You are viewing {user}'s profile.
            </Typography>
        </div>
    )
}

export default Profile