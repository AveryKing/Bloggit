import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Settings = ({user}) => {
    return (

        <div className="container-fluid">
            <br />
            <div className="col-lg-12 d-lg-flex justify-content-lg-center">
                <div className="card shadow mb-3">
                    <div className="card-header py-3">
                        <Typography variant='h6' >Your Settings</Typography>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group mb-3"><label className="form-label"
                                                                            htmlFor="email"><strong><Typography sx={{fontWeight:'bold'}}>Username</Typography></strong></label><input className="form-control" type="email"
                                                                                                                                    placeholder={user.username} name="email"
                                                                                                                                    readOnly="" disabled/></div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group mb-3"><label className="form-label"
                                                                            htmlFor="email"><strong><Typography sx={{fontWeight:'bold'}}>Display Name</Typography></strong></label><input className="form-control" type="email"
                                                                                                                                    placeholder={user.username} name="email"
                                                                                                                                    readOnly="" /></div>
                                </div>


                            </div>

                            <div className="row">

                            </div>
                            <div className="form-group mb-3">
                                <Button variant='contained' size='small' type="submit">Save Settings</Button>&emsp;
                                <Button color='secondary' variant='contained' size='small' type="submit">Change Password</Button>&emsp;
                                <Button color='error' variant='contained' size='small'  type="">Erase Account</Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>


)
}

export default Settings