import React from "react";
import "./pageStyles/portfolio.css";
import Footer from "../Footer";

function Contact() {
    return (
        <div>

            <h1> Contact Information </h1>
            <div id="contact-info" className="container-sm">
                <div className="row">
                    <p> Email: robertjgassner@gmail.com</p>
                    
                </div>

                <div className="row">
                    <h3>Profiles:</h3>
                </div>
                <div><a href="https://github.com/razzlejazzled" class="other-info">Github</a> </div>
                <div><a href="https://www.linkedin.com/in/r-j-gassner-371b241aa/" className="other-info">Linkedin</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;