import { React, useState, useEffect } from 'react'
import '../index.css'

export default function Landing() {

    return (
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