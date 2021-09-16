import React, { useEffect, useState } from 'react'
import './Tower.css'
import TowerDisc from './TowerDisc'

const Tower = (props) => {

    const [towerActive, setTowerActive] = useState(false)

    const [discs, setDiscs] = useState(props.discs)

    const [discCount, setDiscCount] = useState(discs.length)
    

    const handleTowerClicked = () => {
        setDiscs([<TowerDisc discClass={"size1"}/>, ...discs])
        if (!(props.discActive)) {
            if (discs.length > 0) {
                props.returnTowerClickedInfo(discs[0]);
                discs.shift()
                setDiscCount(discs.length)
            }
        }
        else {
            // Add current disc to this tower if its smaller than the top disc
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
