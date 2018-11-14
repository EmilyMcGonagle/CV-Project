import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';
import { SocialIcon } from 'react-social-icons';

const Contact = () =>{
    return(
        <div>
            <fade top>
            <h2>Contact</h2>
            <div className="contact">
                <SocialIcon url="https://www.linkedin.com/in/emily-mcgonagle-8a9258150/" />
                <SocialIcon url="https://github.com/EmilyMcGonagle" />
                <p><b>Email: </b>Emily.mcgonagle@accenture.com</p>
            </div>
            </fade>
        </div>
    );
}

export default Contact