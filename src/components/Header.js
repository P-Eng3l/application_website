import { React, useState, useEffect } from 'react'
import '../index.css'

export default function Header() {

    const [hoveringSrc, setHoveringSrc] = useState("./main_icon_4.png");
    const handleMouseOver = (e) => {
        setHoveringSrc(e);
    };
    const handleMouseOut = (e) => {
        setHoveringSrc(e);
    };

    return (
        <header className="">

            <span className="">
                <a href="https://www.linkedin.com/in/philippengel97/" target="_blank">Philipp Engel</a>
            </span>

            <button className="">
                <a href="#landing"><img src={hoveringSrc} className="header-icon" alt='Home Button' onMouseOver={() => {setHoveringSrc("./main_icon_5.png")}} onMouseOut={() => {setHoveringSrc("./main_icon_4.png")}}/></a>
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
                    {/* <li>
                        <a href="#match">
                            Helsing
                        </a>
                    </li> */}
                </ul>
            </nav>


        </header>
    )
}