import { React, useState, useEffect } from 'react'
import '../index.css'

export default function Landing_Mobile() {

    return (
        <div className="landing-grid" id="landing">

            <div className="landing-grid-item">

            </div>

            <div className="landing-grid-item">
                <span className="landing-text-inverted font-size-inverted-resp">
                    Upcoming
                </span>
                <span className="landing-text font-size-normal-resp">
                    Product
                </span>
            </div>

            <div className="landing-grid-item">
                <p className="landing-text font-size-normal-resp">
                    Manager Based
                </p>
            </div>

            <div className="landing-grid-item">
                <p className="landing-text font-size-normal-resp">
                    In Munich
                </p>
            </div>

            <div className="landing-grid-item">

            </div>

        </div>
    )
}