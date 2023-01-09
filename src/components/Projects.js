import { React, useState } from 'react'
import '../index.css'
import Timeline from './Timeline.js'

export default function Projects() {

    const openInNewTab = url => {
        window.open(url, '_blank');
    };

    const [hovering1, setHovering1] = useState(false);
    const handleMouseOver1 = () => {
        setHovering1(true);
    };
    const handleMouseOut1 = () => {
        setHovering1(false);
    };
    const style1 = {
        color: hovering1 === true ? "rgb(129, 126, 126)" : "white",
        height: "20px",
        transition: "all 0.3s ease 0s"
    }

    const [hovering2, setHovering2] = useState(false);
    const handleMouseOver2 = () => {
        setHovering2(true);
    };
    const handleMouseOut2 = () => {
        setHovering2(false);
    };
    const style2 = {
        color: hovering2 === true ? "rgb(129, 126, 126)" : "white",
        height: "20px",
        transition: "all 0.3s ease 0s"
    }

    const [hovering3, setHovering3] = useState(false);
    const handleMouseOver3 = () => {
        setHovering3(true);
    };
    const handleMouseOut3 = () => {
        setHovering3(false);
    };
    const style3 = {
        color: hovering3 === true ? "rgb(129, 126, 126)" : "white",
        height: "20px",
        transition: "all 0.3s ease 0s"
    }

    const [hovering4, setHovering4] = useState(false);
    const handleMouseOver4 = () => {
        setHovering4(true);
    };
    const handleMouseOut4 = () => {
        setHovering4(false);
    };
    const style4 = {
        color: hovering4 === true ? "rgb(129, 126, 126)" : "white",
        height: "20px",
        transition: "all 0.3s ease 0s"
    }

    return (

        <div style={{ marginTop: "12%" }} className="experience-grid-center-projects">
            <button style={{ marginTop: "0" }} className="experience-grid-center-projects-item"
                onClick={() => openInNewTab('https://ucb-info-frontend-webarch.github.io/final-project-team-5-fall22/')}
                onMouseOver={() => {setHovering1(true)}} onMouseOut={() => {setHovering1(false)}} >
                <div style={style1} className="project-item-header">
                    Recipe Generation Tool
                </div>
                <p style={style1} className="project-item-tec">
                    React, JavaScript, HTML, CSS, DallE
                </p>
            </button>

            <button className="experience-grid-center-projects-item"
                onClick={() => openInNewTab('https://github.com/P-Eng3l/application_websitehttps://google.com')}
                onMouseOver={() => {setHovering2(true)}} onMouseOut={() => {setHovering2(false)}} >
                <div style={style2} className="project-item-header">
                    Application Website
                </div>
                <p style={style2} className="project-item-tec">
                    React, JavaScript, HTML, CSS
                </p>
            </button>

            <button className="experience-grid-center-projects-item"
                onClick={() => openInNewTab('https://github.com/P-Eng3l/todoist_clone')}
                onMouseOver={() => {setHovering3(true)}} onMouseOut={() => {setHovering3(false)}} >
                <div style={style3} className="project-item-header">
                    ToDoIst - Clone
                </div>
                <p style={style3} className="project-item-tec">
                    React, JavaScript, HTML, CSS
                </p>
            </button>

            <button className="experience-grid-center-projects-item"
                onClick={() => openInNewTab('https://github.com/mlnzhn/occams_razor')}
                onMouseOver={() => {setHovering4(true)}} onMouseOut={() => {setHovering4(false)}} >
                <div style={style4} className="project-item-header">
                    Classification Algorithm
                </div>
                <p style={style4} className="project-item-tec">
                    R, Random Forest, XGBoost
                </p>
            </button>

            <button className="experience-grid-center-projects-item2">
                <div className="project-item-header2">
                    ... More Projects Coming Soon
                </div>
            </button>

        </div>
    )
}