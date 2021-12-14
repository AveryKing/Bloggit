import {Link} from "@mui/material";
import * as React from "react";
import userService from "../services/users";
import {useState} from "react";

const ByLink = ({id,click}) => {

    const [name, setName] = useState('')

        userService.getUser(id)
            .then(response => {
               setName(response.username)

            }).catch(err => {
            return err
        })




    return (
        <Link onClick={click}>&nbsp;{name}</Link>
    )

}
export default ByLink