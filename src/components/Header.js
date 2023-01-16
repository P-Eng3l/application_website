import { React, useState, useEffect } from 'react'
import '../index.css'
import Header_Mobile from './Header_Mobile.js'
import Header_Desktop from './Header_Desktop.js'

export default function Header() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 880;

    useEffect(() => {

        window.addEventListener("resize", () => setWidth(window.innerWidth));

    }, []);

    return (
        // width < breakpoint ? <Header_Mobile /> : <Header_Desktop />
        <header className="">

            <span className="">
                <a href="https://www.linkedin.com/in/philippengel97/" target="_blank">Philipp Engel</a>
            </span>

            <button className="">
                <a href="#landing"><img src="./main_icon.svg" className="header-icon" alt='Home Button' /></a>
            </button>

            <nav className="">
                <ul>
                    <li>
                        <a href="#experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#mission">
                            Mission
                        </a>
                    </li>
                    <li>
                        <a href="#match">
                            Helsing
                        </a>
                    </li>
                </ul>
            </nav>


        </header>
    )
}