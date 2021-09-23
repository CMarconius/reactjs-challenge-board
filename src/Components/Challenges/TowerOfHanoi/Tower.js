import react from 'react'
import React, { useEffect, useState } from 'react'
import { isValidElement } from 'react'
import './Tower.css'

const Tower = (props) => {

    const [towerActive, setTowerActive] = useState(false)

    const [discs, setDiscs] = useState(props.discs)

    const [discCount, setDiscCount] = useState(discs.length)

    const [discActive, setDiscActive] = useState(props.discActive)

    const [currentDisc, setCurrentDisc] = useState(props.currentDisc)
    
    

    useEffect(() => {
    }, [currentDisc]);

    useEffect(() => {
    }, [discActive]);

    useEffect(() => {
        setDiscActive(props.discActive)
    }, [props.discActive]);

    useEffect(() => {
        setCurrentDisc(props.currentDisc)
    }, [props.currentDisc]);

    useEffect(() => {
    }, [discs]);

    const handleTowerClicked = () => {
        if (discActive) {
            let newDisc = currentDisc
            console.log(newDisc)
            if (isValidElement(newDisc)) {
                setDiscs(discs => [...discs, newDisc])
                console.log("NewDisc Is Not Null...")
            }
        }
        else {
            console.log("NewDisc Is Null...")
            if (discs.length > 0) {
                props.returnTopDisc(discs[0]);
                discs.shift()
                setDiscCount(discs.length)
            }
        }
    }

    return (
        <div onClick={handleTowerClicked} className="tower">
            <div className="towerContainer">
                <h3>Tower {props.id ? props.id : null}</h3>
                <div className="towerSection">
                    <div className="towerPole"></div>
                    <div className={"discsSection discCount" + discCount}>
                        {discs.map(disc => {return disc})}
                    </div>
                </div>
                <div className="towerBase"></div>
            </div>
        </div>
    )
}

export default Tower
