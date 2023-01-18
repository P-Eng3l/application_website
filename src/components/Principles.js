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
        minHeight: hovering1 === true ? '180px' : 'auto',
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
        minHeight: hovering3 === true ? '180px' : 'auto',
    }

    return (

        <div className="experience-grid-center-projects">
            
            <button style={{marginTop: "0"}} className="experience-grid-center-projects-item" 
                onMouseOver={() => {setHovering1(true)}} onMouseOut={() => {setHovering1(false)}} >
                <div className="project-item-header">
                    Mission Driven & Ownership Oriented
                </div>
                <p style={display1} className="project-item-tec">
                    Working independently means to make countless decisions of various granularities. 
                    To do so, I always aim to have a clear understanding of the company's goals and 
                    mission in order to align my daily actions accordingly. To achieve this working style 
                    of accountability and results I use the following approach:
                    <ol >
                        <li style={{color: "rgb(188, 186, 186)"}}>Analyzing the overall mission: What is the intend and the desired endstate?</li>
                        <li style={{color: "rgb(188, 186, 186)"}}>What are my resources at hand and what is missing?</li>
                        <li style={{color: "rgb(188, 186, 186)"}}>What is the simplest course of action to achieve the task, while planning for contingencies and mitigating risks?</li>
                        <li style={{color: "rgb(188, 186, 186)"}}>Continuously update key stakeholders and question the plan at hand.</li>
                    </ol>
                </p>
            </button>
            
            <button className="experience-grid-center-projects-item"
                onMouseOver={() => {setHovering2(true)}} onMouseOut={() => {setHovering2(false)}} >
                <div className="project-item-header">
                    Proactive & Self-Managing
                </div>
                <p style={display2} className="project-item-tec">
                    Having realized that I do my best work when I am able to choose my tasks rather than 
                    getting told what to do, I always try to be proactive and self-managing. 
                    This includes taking responsibility for my performance, taking initiative by 
                    anticipating and preparing for future challenges, and to continuously looking for ways 
                    to improve and add value by asking: “What’s next”? 
                </p>
            </button>

            <button style={{marginBottom: "0"}} className="experience-grid-center-projects-item"
                onMouseOver={() => {setHovering3(true)}} onMouseOut={() => {setHovering3(false)}} > 
                <div className="project-item-header">
                    Prioritize & Execute
                </div>
                <p style={display3} className="project-item-tec">
                Working in an entrepreneurial context oftentimes means to deal with countless problems at once, 
                which easily leads to the faulty approach of tackling all problems simultaneously. 
                Having fallen victim to this mistake more than once, 
                I adopted a strict approach of prioritizing and executing one task after the other, by:
                    <ol >
                        <li style={{color: "rgb(188, 186, 186)"}}>Evaluating the current highest priority task.</li>
                        <li style={{color: "rgb(188, 186, 186)"}}>Laying out in simple and concise terms the priority to important stakeholders.</li>
                        <li style={{color: "rgb(188, 186, 186)"}}>Developing a solution and seeking input from key stakeholders.</li>
                        <li style={{color: "rgb(188, 186, 186)"}}>Focusing all efforts on executing the solution</li>
                    </ol>
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