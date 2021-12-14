import Typography from "@mui/material/Typography";

const Settings = ({user}) => {
    return (

        <div className="container-fluid">
            <br />
            <div className="col-lg-12 d-lg-flex justify-content-lg-center">
                <div className="card shadow mb-3">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Your Settings</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group mb-3"><label className="form-label"
                                                                            htmlFor="email"><strong>Username</strong></label><input className="form-control" type="email"
                                                                                                                                    placeholder={user.username} name="email"
                                                                                                                                    readOnly="" disabled/></div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group mb-3"><label className="form-label"
                                                                            htmlFor="email"><strong>Display Name</strong></label><input className="form-control" type="email"
                                                                                                                                    placeholder={user.username} name="email"
                                                                                                                                    readOnly="" /></div>
                                </div>


                            </div>

                            <div className="row">

                            </div>
                            <div className="form-group mb-3">
                                <button className="btn btn-primary btn-sm" type="submit">Save Settings</button>&emsp;
                                <button className="btn btn-secondary btn-sm" type="submit">Change Password</button>&emsp;
                                <button className="btn btn-danger btn-sm" type="">Erase Account</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>


)
}

export default Settings