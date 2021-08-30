import React, { useState } from 'react'
import './Tower.css'

const Tower = (props) => {
    const [disc1Present, setDisc1Present] = useState(true);
    const [disc2Present, setDisc2Present] = useState(true);
    const [disc3Present, setDisc3Present] = useState(true);
    const [disc4Present, setDisc4Present] = useState(true);

    const [disc1Active, setDisc1Active] = useState("");
    const [disc2Active, setDisc2Active] = useState("");
    const [disc3Active, setDisc3Active] = useState("");
    const [disc4Active, setDisc4Active] = useState("");

    const handleClick1 = () => {
        if (disc1Active === "") {
            setDisc1Active("active")
        }
        else {
            setDisc1Active("")
        }
        setDisc2Active("")
        setDisc3Active("")
        setDisc4Active("")
    }

    const handleClick2 = () => {
        setDisc1Active("")
        if (disc2Active === "") {
            setDisc2Active("active")
        }
        else {
            setDisc2Active("")
        }
        setDisc3Active("")
        setDisc4Active("")
    }

    const handleClick3 = () => {
        setDisc1Active("")
        setDisc2Active("")
        if (disc3Active === "") {
            setDisc3Active("active")
        }
        else {
            setDisc3Active("")
        }
        setDisc4Active("")
    }

    const handleClick4 = () => {
        setDisc1Active("")
        setDisc2Active("")
        setDisc3Active("")
        if (disc4Active === "") {
            setDisc4Active("active")
        }
        else {
            setDisc4Active("")
        }
    }

    return (
        <div>
            <h3>Tower {props.id ? props.id : null}</h3>
            <div className="towerContainer">
                <div className="towerSection">
                    <div className="towerPole"></div>
                    <div className="discsSection">
                        {disc1Present ? <div onClick={handleClick1} className={"towerDisc disc1 " + disc1Active}></div> : null}
                        {disc2Present ? <div onClick={handleClick2} className={"towerDisc disc2 " + disc2Active}></div> : null}
                        {disc3Present ? <div onClick={handleClick3} className={"towerDisc disc3 " + disc3Active}></div> : null}
                        {disc4Present ? <div onClick={handleClick4} className={"towerDisc disc4 " + disc4Active}></div> : null}
                    </div>
                </div>
                <div className="towerBase"></div>
            </div>
        </div>
    )
}

export default Tower
