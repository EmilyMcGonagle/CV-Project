import React, {Component} from 'react'
import Fade from 'react-reveal/Fade';

//Import other file pages
import Overview from "./Components/Overview.js"
import About from "./Components/about"
import Qualifications from "./Components/qualifications"
import Landing from "./Components/landing"
import Contact from "./Components/contact"
import Cards from "./cards/cards"
import Footer from "./Components/footer"

//Stylesheet
import "./App.css"

class CV extends Component{
    render(){
        return(
            <div className="wrapper">
              <div className="main">
                
                <div><Landing /></div>
                <div><Overview /></div>
                <div><About /></div>
                <div><Qualifications /></div>
                <div><Cards /></div>
                <div><Contact /></div>
                <div><Footer /></div>
              </div>
            </div>
        );
    }
}

export default CV