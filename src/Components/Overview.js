import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';



import "../App.css"

const Overview = () =>{
        return(
            <div className="overview">
                <Fade top>
                <h2 className="overviewLabel">Overview</h2>
                <p></p>
                <h3>Welcome to my CV Website</h3>
                <p> I produced this simple website from scratch using <b>React.js</b>, as a way to showcase the skills I have learned. In the process of building this website, I have learned even more skills and have put these into practice throughout the project. If you would like to get in touch, please find my contact details at the bottom of the page!</p>
                </Fade>
            </div>
        );
    }

export default Overview