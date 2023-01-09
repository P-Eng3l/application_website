import { React, useState } from 'react'
import '../index.css'
import Timeline from './Timeline.js'
import TimelineL2 from './TimelineL2.js'
import TimelineL3 from './TimelineL3.js'



export default function Education() {

    const [hovering1, setHovering1] = useState(false)

    return (

        <div className="experience-grid-center">
            <Timeline
                time="10/2020 - 08/2023"
                main="Technical University Of Munich"
                minor="M.Sc. Managemnt & Technology"
                line1="Focus Areas: Entrepreneurship, AI Ethics, Front-End Programming, and Machine Learning"
                line2="Average Grade: 1.1"

            />
            <TimelineL2
                time="08/2022 - 12/2022"
                main="University Of California, Berkeley"
                minor="Visiting Student"
                line1="Focus Areas: Entrepreneurship, Vanture Capital, and Front-End Programming"
                line2="Average Grade: A"
            />
            <TimelineL2
                time="04/2022 - 07/2022"
                main="University Of Cambridge"
                minor="Visiting Student"
                line1="Master Thesis: The Perceived Usefulness Of Ethical-Aligned AI Development Methods"
                line2="Average Grade: 1.0"
            />
            <TimelineL2
                time="04/2021 - 10/2021"
                main="Stanford University"
                minor="Research Fellow"
                line1="Research Project: Responsible Digital Leadership Project (GAIA)"
                line2="Contribution: Identified 10+ AI-Dilemmas And Co-Author Of Research Paper"
            />
            <TimelineL2
                time="02/2021 - 08/2023"
                main="Center For Digital Technology & Management"
                minor="Honors Degree"
                line1="Focus: Opportunity Recognition, Product Management, and Data Science"
                line2="Average Grade: 1.2"
            />
            <Timeline
                time="10/2016 - 04/2020"
                main="Technical University Of Munich"
                minor="B.Sc. Managemnt & Technology"
                line1="Focus Areas: General Management Education, Java-Programming, and Software Architecture"
                line2="Average Grade: 1.9"
            />

            {/* <div className="conclusion-grid">
                <img src="./conclusion.svg" alt="Conclusion Icon" className="conclusion-grid-item-img" />
                <p className="conclusion-grid-item-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div> */}

        </div>
    )
}