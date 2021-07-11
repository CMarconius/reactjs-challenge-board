import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import gridTemp from './gameGridTemp.png'
import './TwentyFortyEight.css'

function TwentyFortyEight() {

    const [currentScore, setCurrentScore] = useState(1024)
    const [bestScore, setBestScore] = useState(801024)

    return (
        <div>
            <div className="twentyFortyEight">
                <div className="gameHeader">

                    <div className="headerLeft">
                        <p>2048</p>
                        <p>Join the tiles, get to <strong>2048!</strong></p>
                    </div>

                    <div className="headerRight">
                        <div className="scores">
                            <div className="scoreBox">
                                <p>SCORE</p>
                                <p>{currentScore}</p>
                            </div>
                            <div className="scoreBox">
                                <p>BEST</p>
                                <p>{bestScore}</p>
                            </div>
                        </div>
                        <div className="newGame">
                            <Button buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">
                              &#9100; UNDO
                            </Button>
                            <Button buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">
                                NEW GAME
                            </Button>
                        </div>
                    </div>

                </div>
                    
                <div className="gameContainer">
                    <img src={gridTemp} alt="" />
                </div>
            
            </div>
        </div>
    )
}

export default TwentyFortyEight
