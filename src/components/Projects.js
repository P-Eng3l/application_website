import { React, useState } from 'react'
import '../index.css'
import Timeline from './Timeline.js'

export default function Projects() {

    return (

        <div className="experience-grid-center-projects">
            <button style={{marginTop: "0"}} className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    Own: Application Website
                </div>
                <p className="project-item-tec">
                    React
                </p>
            </button>

            <button className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    Replica: ToDoIst - Clone
                </div>
                <p className="project-item-tec">
                    React, Firebase
                </p>
            </button>

            <button className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    University: Java-Projects
                </div>
                <p className="project-item-tec">
                    Java
                </p>
            </button>

            <button className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    University: Functional Programming
                </div>
                <p className="project-item-tec">
                    ToDo
                </p>
            </button>

            <button className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    University: AI prediction
                </div>
                <p className="project-item-tec">
                    R
                </p>
            </button>

            <button className="experience-grid-center-projects-item">
                <div className="project-item-header">
                    Own: Application Website
                </div>
                <p className="project-item-tec">
                    React
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