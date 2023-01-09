import { React, useEffect, useState } from 'react'
import '../index.css'

export default function Principles() {

    const [hovering1, setHovering1] = useState(false);
    const handleMouseOver1 = () => {
        setHovering1(true);
    };
    const handleMouseOut1 = () => {
        setHovering1(false);
    };
    const display1 = {
        minHeight: hovering1 === true ? '80px' : 'auto',
    }

    const [hovering2, setHovering2] = useState(false);
    const handleMouseOver2 = () => {
        setHovering2(true);
    };
    const handleMouseOut2 = () => {
        setHovering2(false);
    };
    const display2 = {
        minHeight: hovering2 === true ? '80px' : 'auto',
    }

    const [hovering3, setHovering3] = useState(false);
    const handleMouseOver3 = () => {
        setHovering3(true);
    };
    const handleMouseOut3 = () => {
        setHovering3(false);
    };
    const display3 = {
        minHeight: hovering3 === true ? '80px' : 'auto',
    }

    return (

        <div className="experience-grid-center-projects">
            
            <button style={{marginTop: "150px"}} className="experience-grid-center-projects-item" 
                onMouseOver={() => {setHovering1(true)}} onMouseOut={() => {setHovering1(false)}} >
                <div className="project-item-header">
                    Mission Driven & Ownership Oriented
                </div>
                <p style={display1} className="project-item-tec">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </button>
            
            <button style={{marginTop: "10px"}} className="experience-grid-center-projects-item"
                onMouseOver={() => {setHovering2(true)}} onMouseOut={() => {setHovering2(false)}} >
                <div className="project-item-header">
                    Proactive & Self-Managing
                </div>
                <p style={display2} className="project-item-tec">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </button>

            <button style={{marginTop: "10px"}} className="experience-grid-center-projects-item"
                onMouseOver={() => {setHovering3(true)}} onMouseOut={() => {setHovering3(false)}} > 
                <div className="project-item-header">
                    TBD
                </div>
                <p style={display3} className="project-item-tec">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </button>

            {/* <div className="conclusion-grid">
                <img src="./conclusion.svg" alt="Conclusion Icon" className="conclusion-grid-item-img" />
                <p className="conclusion-grid-item-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div> */}

        </div>
    )
}