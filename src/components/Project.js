import React from "react";

function Project(props) {
    return (


        <>
        <div className="col-md-6 col-sm-6">
            <h3>{props.name}</h3>
            <img className="img-fluid img-thumbnail" src={props.image} alt="screenshot of the deployed application" />
            <div>
                <a href={props.deployment}>The Deployed Site</a>
            </div>
            <a href={props.github}>The Github Repo</a>
            </div>
        </>




    )
}

export default Project