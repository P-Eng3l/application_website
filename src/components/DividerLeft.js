import { React } from 'react'
import '../index.css'

export default function DividerLeft() {

    return (
        <div className="divider-grid-left" id="mission">
            <span className="divider-text-inverted">
                Mission Statement
            </span>
            <div className="divider-grid-item">
                <hr className="divider-line" />
            </div>
        </div>
    )
}