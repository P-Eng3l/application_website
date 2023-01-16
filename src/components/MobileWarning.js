import { React, useState, useEffect } from 'react'
import '../index.css'

export default function MobileWarning() {

    return (
        <div className="MobileWarning">

            <p className="MobileWarning-Text">
                Hey there, <br />
                unfortunately, this web application is not optimized for a mobile experience.
                Please use your desktop to view this application.<br />
                <br />
                Thank you very much and please excuse any inconvenience! 
            </p>

        </div>
    )
}