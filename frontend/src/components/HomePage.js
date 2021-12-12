import Welcome from "./Welcome";
import PostGrid from "./PostGrid";

import React from "react";

const HomePage = ({loggedIn}) => {
    if(!loggedIn) {
        return (
            <div id="HomePage">
                <Welcome />
                <PostGrid />
            </div>
        )
    } else {
        return (
            <div id="HomePage">

                <PostGrid />
            </div>
        )
    }

}

export default HomePage