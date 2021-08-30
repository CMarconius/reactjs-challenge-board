import React, { useState } from 'react'
import Tower from './Tower';
import './TowerOfHanoi.css'

const TowerOfHanoi = () => {
    
    const [numberOfTowers, setNumberOfTowers] = useState(3);
    const [towers, setTowers] = useState(() => {
        let arr = [];
        for (let i = 1; i <= numberOfTowers; i++) {
            arr.push(<Tower id={i}/>);
        }
        return arr;
    })

    
    
    return (
        <>
            <div className="towerOfHanoi">
                <div className="mainContainer">

                    <div className="instructions">
                        <h3>Goal: Move the discs from the left tower over to the right tower.</h3>
                        <h3>Note: Only one disk can be moved at a time. No disk can be placed on top of the smaller disk.</h3>
                    </div>
                    

                    <div className="towersSection">
                        {towers.map(tower => {return tower})}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TowerOfHanoi
