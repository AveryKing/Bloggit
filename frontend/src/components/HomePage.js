import Welcome from "./Welcome";
import PostGrid2 from "./PostGrid2";

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
                <PostGrid2 />
            </div>
        )
    } else {
        return (
            <div>
                <Welcome loggedIn={true} user={user}/>
                <PostGrid2 />
            </div>
        )
    }

}

export default HomePage