import { React, useState } from 'react'
import '../index.css'
import Timeline from './Timeline.js'


export default function ExperienceProf() {

    return (

        <div className="experience-grid-center-expProf">
            <Timeline
                time="11/2021 - 01/2022"
                main="Founders Associate - Luminovo"
                minor="Internship | Munich (DE)"
                line1="Preparing the upcoming Series A by benchmarking the status-quo of Luminovo against comparable start-ups from a financial, product and organisational perspective using an outside-in analysis."
            />
            <Timeline
                time="04/2021 - 08/2021"
                main="Product Management - Alasco"
                minor="University Project | Munich (DE)"
                line1="Building a stand-alone product to tackle the problem of reducing carbon emissions in the construction industry."
            />
            <Timeline
                time="07/2020 - 10/2020"
                main="Venture Development - Picus Capital"
                minor="Internship | Munich (DE)"
                line1="Setting up and developing all financial processes and models as well as scaling up the sales activities by introducing performance tracking models (Increased conversion rate of 50 %)."
            />
            <Timeline
                time="04/2020 - 07/2020"
                main="Business Development - FINN"
                minor="Internship | Munich (DE)"
                line1="Automating the existing sales process as well as conceptualizing and implementing outreach possibilities (Time savings of up to 45 %)."
            />
            <Timeline
                time="05/2019 - 04/2020"
                main="Consultant - Bain & Company"
                minor="Working Student | Munich (DE)"
                line1="Supporting private equity and consulting projects through market research (online, on-site, interviews), as well as through data acquisition, -cleaning, and -analysis tasks."
            />
            <Timeline
                time="09/2018 - 04/2019"
                main="Autonomous Driving - BMW"
                minor="Internship | New York Area (USA)"
                line1="Developing a U.S. strategy for autonomous driving services as well as testing and analyzing the existing autonomous driving system - level 3."
            />
            <Timeline
                time="07/2015 - 04/2016"
                main="Mountain Infantry - Bundeswehr"
                minor="Volunteer | Mittenwald (DE)"
                line1="-"
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