import { React } from 'react'
import '../index.css'

export default function Principles() {

    return (

        <div className="experience-grid-center-projects">
            
            <button style={{marginTop: "0"}} className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    Taking Ownership
                </div>
                <p className="project-item-tec">
                    TBD
                </p>
            </button>

            <button className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    Proactive & Self-Managing
                </div>
                <p className="project-item-tec">
                    TBD
                </p>
            </button>

            <button className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    Mission-Driven
                </div>
                <p className="project-item-tec">
                    TBD
                </p>
            </button>

            <div className="conclusion-grid">
                <img src="./conclusion.svg" alt="Conclusion Icon" className="conclusion-grid-item-img" />
                <p className="conclusion-grid-item-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>

        </div>
    )
}