import React, {Component} from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import "../App.css"


const Landing = () =>{
        return(

            <div className="landing">
                <Fade top>
                <img src={require("../img/bg1.png")} className="bg"></img>
                </Fade>
            </div>
        );
    }

export default Landing