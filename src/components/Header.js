import { React } from 'react'
import '../index.css'

export default function Header() {

    return (
        <header>

            <span>
                <a href="https://www.linkedin.com/in/philippengel97/" target="_blank">Philipp Engel</a>
            </span>

            <button className="header-button">
                <img src="./main_icon.svg" className="header-icon" alt='Home Button' />
            </button>

            <nav>
                <ul className="header-nav">
                    <li>
                        <a href="experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Mission
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Helsing
                        </a>
                    </li>
                </ul>
            </nav>


        </header>
    )
}