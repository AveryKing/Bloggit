import Welcome from "./Welcome";
import PostGrid2 from "./PostGrid2";

import React from "react";
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";

const HomePage = ({loggedIn, user, app}) => {

    const showNewPostModal = () => {
        ReactDOM.render(<NewPostModal/>, document.getElementById("modal"))
    }

    if(!loggedIn) {
        return (
            <div>
                <Welcome />
                <PostGrid2 app={app}/>
            </div>
        )
    } else {
        return (
            <div>
                <Welcome loggedIn={true} user={user}/>
                <PostGrid2 app={app} />
            </div>
        )
    }

}

export default HomePage