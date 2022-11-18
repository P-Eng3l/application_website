import { React, useEffect, useState } from 'react'
import '../index.css'
import Education from './Education'
import ExperienceProf from './ExperienceProf'
import Projects from './Projects'
import Principles from './Principles'

export default function Experience() {

    const [category, setCategory] = useState(<Education />)
    const [categoryStyle, setCategoryStyle] = useState ("Education")

    const styleEducation = {
        fontWeight: categoryStyle == "Education" ? "500" : "400",
        borderRight: categoryStyle == "Education" ? "1px solid white" : "none"
    }

    const styleExperienceProf = {
        fontWeight: categoryStyle == "ExperienceProf" ? "500" : "400",
        borderRight: categoryStyle == "ExperienceProf" ? "1px solid white" : "none"
    }

    const styleProjects = {
        fontWeight: categoryStyle === "Projects" ? "500" : "400",
        borderRight: categoryStyle === "Projects" ? "1px solid white" : "none"
    }

    const stylePrinciples = {
        fontWeight: categoryStyle === "Principles" ? "500" : "400",
        borderRight: categoryStyle === "Principles" ? "1px solid white" : "none"
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

                    <button onClick={() => {setCategory(<Education />); setCategoryStyle("Education")}}>
                        <div style={styleEducation} className="experience-nav-grid-item">
                            Education
                        </div>
                    </button>

                    <button onClick={() => {setCategory(<ExperienceProf />); setCategoryStyle("ExperienceProf")}}>
                        <div style={styleExperienceProf} className="experience-nav-grid-item">
                            Experience
                        </div>
                    </button>

                    <button onClick={() => {setCategory(<Projects />); setCategoryStyle("Projects")}}>
                        <div style={styleProjects} className="experience-nav-grid-item">
                            Projects
                        </div>
                    </button>

                    <button onClick={() => {setCategory(<Principles />); setCategoryStyle("Principles")}}>
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