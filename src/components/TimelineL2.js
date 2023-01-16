import { React, useState, useEffect } from 'react'
import '../index.css'


export default function TimelineL2(props) {
    const [hovering1, setHovering1] = useState(false);

    const display1 = {
        display: hovering1 === true ? 'initial' : 'none'
    }

    const display2 = {
        minHeight: hovering1 === true ? '100px' : 'auto'
    }

    return (
        <div style={display2} className="timeline-grid-l2" onMouseOver={() => {setHovering1(true)}} onMouseOut={() => {setHovering1(false)}}>

            <div className="timeline-grid-item gridFromTo1">
                {props.time}
            </div>

            <div className="gridFromTo3">
                <div className="vertical-line">
                </div>
            </div>

            <div className="timeline-grid-item semi-bold gridFromTo2">
                {props.main}
            </div>

            <div className="timeline-grid-item italics font14 gridFromTo4">
                {props.minor}
            </div>

            <div style={display1} className="timeline-grid-item font14 gridFromTo4-test">
                {props.line1}
                {<br/>}
                {props.line2}            
            </div>

            {/* <div style={display1} className="timeline-grid-item gridFromTo5-2">
                <ul className="marginLess">
                <p className="font12 colorGrey widthSmallS justify">{props.line1}</p>
                </ul>
            </div> */}

        </div>
    )
}