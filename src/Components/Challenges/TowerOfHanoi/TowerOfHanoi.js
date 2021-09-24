import React, { useState, useEffect } from 'react'
import Tower from './Tower';
import TowerDisc from './TowerDisc';
import './TowerOfHanoi.css'

const TowerOfHanoi = () => {
    
    const [numberOfTowers, setNumberOfTowers] = useState(3)
    const [numberOfDiscs, setNumberOfDiscs] = useState(4)

    const [currentDisc, setCurrentDisc] = useState()
    const [discActive, setDiscActive] = useState(false)

    useEffect(() => {
       console.log("discActive Changed to..." + discActive)
    }, [discActive]);

    const returnTopDisc = (clickedDisc) => {
        setDiscActive(true)
        setCurrentDisc(clickedDisc)
    }

    function checkForActiveDisc() {
        if (discActive) {
            return currentDisc
        } else return "No Active Disc"
    }

    const [tower1Discs, setTower1Discs] = useState(() => {
        let arr = [];
        for (let i = 0; i < numberOfDiscs; i++) {
            arr.push(<TowerDisc discClass={"size" + i}/>)
        }
        return arr;
    })

    const [tower2Discs, setTower2Discs] = useState([])
    const [tower3Discs, setTower3Discs] = useState([])

    const [towers, setTowers] = useState(() => {
        let arr = [];

        arr.push(<Tower discActive={() => discActive} currentDisc={currentDisc} returnTopDisc={returnTopDisc} id={1} discs={[...tower1Discs]}/>)
        arr.push(<Tower discActive={() => discActive} currentDisc={currentDisc} returnTopDisc={returnTopDisc} id={2} discs={[...tower2Discs]}/>)
        arr.push(<Tower discActive={() => discActive} currentDisc={currentDisc} returnTopDisc={returnTopDisc} id={3} discs={[...tower3Discs]}/>)
        
        return arr;
    })

    
    function getDiscActive() {
        return discActive
    }

    return (
        <>
            <div className="towerOfHanoi">
                <div className="mainContainer">

                    <div className="instructions">
                        <h3>Goal: Move the discs from the left tower over to the right tower.</h3>
                        <h3>Note: Only one disk can be moved at a time. No disk can be placed on top of the smaller disk.</h3>
                    </div>

                    <div className="currentDisc">
                        <h3>Currnet Disc</h3>
                        <div className="currentDiscContainer">
                            {currentDisc}
                        </div>
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
