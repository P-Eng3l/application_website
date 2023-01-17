import { React } from 'react'
import '../index.css'

export default function Divider() {

    return (
        <div className="divider-grid" id="experience">
            <div className="divider-grid-item">
                <hr className="divider-line" />
            </div>
            <span className="divider-text-inverted">
                My Past
            </span>
        </div>
    )
}