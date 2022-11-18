import { React, useState } from 'react'
import '../index.css'


export default function TimelineL2(props) {

    const [hovering1, setHovering1] = useState(false);

    const display1 = {
        visibility: hovering1 === true ? 'visible' : 'hidden'
    }

    const display2 = {
        display: props.line2 === "" ? 'none' : 'initial'
    }

    return (
        <div className="timeline-grid-l2" onMouseOver={() => {setHovering1(true)}} onMouseOut={() => {setHovering1(false)}}>

            <div className="timeline-grid-item gridFromTo1">
                {props.time}
            </div>

            <div className="gridFromTo3">
                <div className="vertical-line">
                </div>
            </div>

            <div className="timeline-grid-item semi-bold gridFromTo2-1">
                {props.main}
            </div>

            <div className="timeline-grid-item italics font14 gridFromTo4">
                {props.minor}
            </div>

            <div style={display1} className="timeline-grid-item gridFromTo5-3">
                <ul className="marginLess">
                <p className="font12 colorGrey widthSmallSS justify">{props.line1}</p>
                </ul>
            </div>

        </div>
    )
}