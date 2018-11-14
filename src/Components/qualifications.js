import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';

const Qualifications = () =>{
    return(
        <div>
            <Fade top>
            <h2>Qualifications</h2>
            <h3 className="heading3">Education</h3>
            <p>Before coming to Accenture, I was at Sixth form, where I achieved the following A-Levels:</p></Fade>
            <ul className="qual">
                <Fade top cascade>
                <li><b>History: </b>A</li>
                <li><b>Government and Politics: </b>C</li>
                <li><b>Computer Science: </b>D</li></Fade>
            </ul>
            <Fade top>
            <p>I am currently studying for my degree in <b>Digital and Technology Solutions</b>, with Sunderland University. </p>
            <p></p>
            <h3 className="heading3">Training</h3>
            <p>During my time at Accenture, I have also been involved in a number of training courses. I attended the <b>Agile Delivery School</b>, where I was taught about the agile method used within the company. Recently, I attended <b>DevOps Academy</b>, which taught me key skills about DevOps, and gave me some experience in some of the tools used.</p>
            <p>Additionally, I was also involed in a training course for <b>Pega</b>. After this course I completed an exam, meaning I am now a <b>Certified Systems Architect.</b></p>

        </Fade>
        </div>
        
    );
}

export default Qualifications