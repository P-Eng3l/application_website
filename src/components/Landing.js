import { React, useState, useEffect } from 'react'
import '../index.css'
import Landing_Mobile from './Landing_Mobile.js'
import Landing_Desktop from './Landing_Desktop.js'

export default function Landing() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 880;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        // width < breakpoint ? <Landing_Mobile /> : <Landing_Desktop />
        <div className="landing-grid" id="landing">

            <div className="landing-grid-item">

            </div>

            <div className="landing-grid-item">
                <span className="landing-text-inverted">
                    Upcoming
                </span>
                <span className="landing-text">
                    Product
                </span>
            </div>

            <div className="landing-grid-item">
                <p className="landing-text">
                    Manager Based
                </p>
            </div>

            <div className="landing-grid-item">
                <p className="landing-text">
                    In Munich
                </p>
            </div>

            <div className="landing-grid-item">

            </div>

        </div>
    )
}