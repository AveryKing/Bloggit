import React from "react";
import ReactDOM from "react-dom";
import NewPostModal from "./NewPostModal";
import ErrorModal from "./ErrorModal";
const Welcome = ({loggedIn}) => {
    const showNewPostModal = () => {
        if(loggedIn) {
            ReactDOM.render(<NewPostModal/>, document.getElementById("modal"))
        } else {
            ReactDOM.render(<ErrorModal />, document.getElementById("modal"))
        }
    }


    return (

        <section className="highlight-clean">

            <div className="container">
                <div className="intro">
                    <h2 className="text-center">Welcome!</h2>
                    <p className="text-center">Bloggit is a website where anyone is welcome to share their thoughts.<br/> Click below to make a new post.</p>
                </div>
                <div className="buttons"><a onClick={showNewPostModal} className="btn btn-primary" role="button" href="#">new post</a></div>
            </div>
        </section>
    )
}

export default Welcome