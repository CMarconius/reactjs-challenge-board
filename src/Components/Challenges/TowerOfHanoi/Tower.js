import react from 'react'
import React, { useEffect, useState } from 'react'
import { isValidElement } from 'react'
import './Tower.css'
import TowerDisc from './TowerDisc'

const Tower = (props) => {

    const [towerActive, setTowerActive] = useState(false)

    const [discs, setDiscs] = useState(props.discs)

    const [discCount, setDiscCount] = useState(discs.length)
    
    

    useEffect(() => {
    }, [props.discActive]);

    useEffect(() => {
    }, [props.currentDisc]);

    useEffect(() => {
    }, [discs]);

    const handleTowerClicked = () => {
        if (!props.discActive) {
            let newDisc = props.currentDisc
            console.log(newDisc)
            if (isValidElement(newDisc)) {
                setDiscs(discs => [...discs, newDisc])
                console.log("NewDisc Is Not Null...")
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
