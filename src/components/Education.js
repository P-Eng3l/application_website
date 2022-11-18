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
                line1="During my masters I focused on Entrepreneurial Finance, AI Ethics, 
                and Digital Transformation, while expanding my computer science hard-skills. Average grade: 1.2"
            />
            <TimelineL2
                time="08/2022 - 12/2022"
                main="University Of California, Berkeley"
                minor="Visiting Student"
                line1="At UC Berkeley I took entrepreneurship and HAAS Business School 
                and font-end architecture courses at the School for Information. Average grade: A"
            />
            <TimelineL2
                time="04/2022 - 07/2022"
                main="University Of Cambridge"
                minor="Visiting Student"
                line1="At Cambirdge University, Darwin College, I focused on the topic of 
                AI Ethics and wrote my master thesis on the topic of: The Perceived Usefulness of Ethical-Aligned AI Development Methods"
            />
            <TimelineL2
                time="04/2021 - 10/2021"
                main="Stanford University"
                minor="Research Fellow"
                line1="At Stanford, Chair for Human Rights and International Justice, I was part of the 
                Responsible Digital Leadership Project with the goal of analyzing ethical dilemmas 
                which arise through the use of AI in the financial sector"
            />
            <TimelineL3
                time="02/2021 - 08/2023"
                main="Center For Digital Technology & Management"
                minor="Honors Degree"
                line1="At the CDTM, I was part of multiple entrepreneurial projects with external partners, such as Alasco, with the goal of building MVPs."
            />
            <Timeline
                time="10/2016 - 04/2020"
                main="Technical University Of Munich"
                minor="B.Sc. Managemnt & Technology"
                line1="During my bachelors I got a general management education with a focus on 
                Entrepreneurial Finance, while learning the concepts of Databank, 
                Operating Systems, and Software Architecture. Average Grade: 1.9"
            />

            <div className="conclusion-grid">
                <img src="./conclusion.svg" alt="Conclusion Icon" className="conclusion-grid-item-img" />
                <p className="conclusion-grid-item-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>

        </div>
    )
}