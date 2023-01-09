import { React, useEffect, useState } from 'react'
import '../index.css'
import Education from './Education'
import ExperienceProf from './ExperienceProf'
import Projects from './Projects'
import Principles from './Principles'

export default function Experience() {

    const [category, setCategory] = useState(<Education />)
    const [categoryStyle, setCategoryStyle] = useState ("Education")

    const [hovering1, setHovering1] = useState(false);
    const handleMouseOver1 = () => {
        setHovering1(true);
    };
    const handleMouseOut1 = () => {
        setHovering1(false);
    };

    const [hovering2, setHovering2] = useState(false);
    const handleMouseOver2 = () => {
        setHovering2(true);
    };
    const handleMouseOut2 = () => {
        setHovering2(false);
    };

    const [hovering3, setHovering3] = useState(false);
    const handleMouseOver3 = () => {
        setHovering3(true);
    };
    const handleMouseOut3 = () => {
        setHovering3(false);
    };

    const [hovering4, setHovering4] = useState(false);
    const handleMouseOver4 = () => {
        setHovering4(true);
    };
    const handleMouseOut4 = () => {
        setHovering4(false);
    };

    const styleEducation = {
        fontWeight: categoryStyle == "Education" ? "600" : "400",
        borderRight: categoryStyle == "Education" ? "1px solid white" : "none",
        color: hovering1 === true ? "rgb(129, 126, 126)" : "white",
        transition: "all 0.3s ease 0s"
    }

    const styleExperienceProf = {
        fontWeight: categoryStyle == "ExperienceProf" ? "500" : "400",
        borderRight: categoryStyle == "ExperienceProf" ? "1px solid white" : "none",
        color: hovering2 === true ? "rgb(129, 126, 126)" : "white",
        transition: "all 0.3s ease 0s"
    }

    const styleProjects = {
        fontWeight: categoryStyle === "Projects" ? "500" : "400",
        borderRight: categoryStyle === "Projects" ? "1px solid white" : "none",
        color: hovering3 === true ? "rgb(129, 126, 126)" : "white",
        transition: "all 0.3s ease 0s"
    }

    const stylePrinciples = {
        fontWeight: categoryStyle === "Principles" ? "500" : "400",
        borderRight: categoryStyle === "Principles" ? "1px solid white" : "none",
        color: hovering4 === true ? "rgb(129, 126, 126)" : "white",
        transition: "all 0.3s ease 0s"
    }

    useEffect( () => {console.log(categoryStyle)})
    useEffect( () => {console.log(styleProjects)})

    return (
        <div className="experience-grid" id="experience">
            <div className="experience-grid-item">
                <div className="experience-nav-grid">

                    <div className="experience-nav-grid-item">
                        {/* Empty */}
                    </div>

                    <button onClick={() => {setCategory(<Education />); setCategoryStyle("Education")}} 
                        onMouseOver={() => {setHovering1(true)}} onMouseOut={() => {setHovering1(false)}} >
                        <div style={styleEducation} className="experience-nav-grid-item">
                            Education
                        </div>
                    </button>

                    <button onClick={() => {setCategory(<ExperienceProf />); setCategoryStyle("ExperienceProf")}}
                        onMouseOver={() => {setHovering2(true)}} onMouseOut={() => {setHovering2(false)}} >
                        <div style={styleExperienceProf} className="experience-nav-grid-item">
                            Experience
                        </div>
                    </button>

                    <button onClick={() => {setCategory(<Projects />); setCategoryStyle("Projects")}}
                        onMouseOver={() => {setHovering3(true)}} onMouseOut={() => {setHovering3(false)}} >
                        <div style={styleProjects} className="experience-nav-grid-item">
                            Projects
                        </div>
                    </button>

                    <button onClick={() => {setCategory(<Principles />); setCategoryStyle("Principles")}}
                        onMouseOver={() => {setHovering4(true)}} onMouseOut={() => {setHovering4(false)}} >
                        <div style={stylePrinciples}className="experience-nav-grid-item">
                            Work Principles
                        </div>
                    </button>

                    <div className="experience-nav-grid-item">
                        {/* Empty */}
                    </div>

                </div>
            </div>

            <div className="experience-grid-item">

                {category}

            </div>

        </div>
    )
}