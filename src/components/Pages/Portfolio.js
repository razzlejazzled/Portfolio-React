import React, { Component } from "react";
import "./pageStyles/portfolio.css";
import Project from "../Project";
import projects from "../../projects.json"

class Portfolio extends Component {
    state = {
        projects,
    }
    render() {
        return (
            <div className="page">
                <div id="info" className="container-sm">
                    <h1 id="head">Portfolio: Robert Jacob Gassner</h1>
                    <div id="container" className="container-sm">
                        <div className="row">

                            {this.state.projects.map((project) => (
                                <Project {...project}
                                    key={project.id} />
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}









export default Portfolio