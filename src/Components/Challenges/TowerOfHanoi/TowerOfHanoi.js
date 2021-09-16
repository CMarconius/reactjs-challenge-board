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
        window.addEventListener('keydown', handleMouseMove);

        return () => {
            window.removeEventListener('keydown', handleMouseMove);
        };
    }, [handleMouseMove]);

    useEffect(() => {
       
    }, [discActive]);
    

    function handleMouseMove() {
        const root = document.documentElement;
        
        document.addEventListener('mousemove', evt => {
            let x = evt.clientX;
            let y = evt.clientY;
        
            root.style.setProperty('--mouse-x', x);
            root.style.setProperty('--mouse-y', y);
        });
    }

    const returnTowerClickedInfo = (clickedDisc) => {
        // console.log("Tower " + towerId + " clicked!");
        console.log(clickedDisc)
        setDiscActive(true)
        setCurrentDisc(clickedDisc)
    }

    const [discs, setDiscs] = useState(() => {
        let arr = [];
        for (let i = 0; i < numberOfDiscs; i++) {
            arr.push(<TowerDisc discClass={"size" + i}/>)
        }
        return arr;
    })

    const [towers, setTowers] = useState(() => {
        let arr = [];

        arr.push(<Tower discActive={discActive} returnTowerClickedInfo={returnTowerClickedInfo} id={1} discs={[...discs]} />);

        for (let i = 2; i <= numberOfTowers; i++) {
            arr.push(<Tower discActive={discActive} returnTowerClickedInfo={returnTowerClickedInfo} id={i} discs={[]}/>);
        }
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
