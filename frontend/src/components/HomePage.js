import Welcome from "./Welcome";
import PostGrid from "./PostGrid";

import React from "react";
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";

const HomePage = ({loggedIn, user}) => {

    const showNewPostModal = () => {
        ReactDOM.render(<NewPostModal/>, document.getElementById("modal"))
    }

    if(!loggedIn) {
        return (
            <div>
                <Welcome />
                <PostGrid />
            </div>
        )
    } else {
        return (
            <div>
                <Welcome loggedIn={true} user={user}/>
                <PostGrid />
            </div>
        )
    }

}

export default HomePage