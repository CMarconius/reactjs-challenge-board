import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import GameCell from './GameCell'
import gridTemp from './gameGridTemp.png'
import './TwentyFortyEight.css'

function TwentyFortyEight() {

    const [currentScore, setCurrentScore] = useState(1024)
    const [bestScore, setBestScore] = useState(801024)
    const [gameOn, setGameOn] = useState(false)
    const [currentGridState, setCurrentGridState] = useState([])
    const [previousGridState, setPreviousGridState] = useState([])

    const [gameButtons, setGameButtons] = useState()
    const [gameContent, setGameContent] = useState(
        
        <div className="startGame">      
            <Button onClick={startGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                START GAME
            </Button>
        </div>
    )



    function undoLastMove() {
        setCurrentGridState(...[previousGridState]);
        setPreviousGridState([]);
        setGameContent(
            <Button onClick={startGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                START GAME
            </Button>
        )
    }

    function moveUp() {
        console.log("Move Up");
    }

    function moveRight() {
        console.log("Move Right");
    }

    function moveDown() {
        console.log("Move Down");
    }

    function moveLeft() {
        console.log("Move Left");
    }

    useEffect(() => {
        document.addEventListener('keydown', function(e){
            e.preventDefault();
            if (e.key === "ArrowUp") {
                moveUp();
            }
            if (e.key === "ArrowRight") {
                moveRight();
            }
            if (e.key === "ArrowDown") {
                moveDown();
            }
            if (e.key === "ArrowLeft") {
                moveLeft();
            }
        })
    }, [])

    function startGame() {
        setGameButtons(
            <>
            <Button onClick={undoLastMove} buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">
                &#10531; UNDO
            </Button>
            <Button buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">
                NEW GAME
            </Button>
            </>
        )
        setGameOn(true)
        setGameContent(
            <>
            <div className="cellWrap">
                <GameCell/>
                <GameCell/>
                <GameCell/>
                <GameCell/>

                <GameCell/>
                <GameCell/>
                <GameCell/>
                <GameCell/>
                
                <GameCell/>
                <GameCell/>
                <GameCell/>
                <GameCell/>
                
                <GameCell/>
                <GameCell/>
                <GameCell/>
                <GameCell/>
            </div>
            </>
        )
    }
    

    return (
        <>
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
                            {gameButtons}
                        </div>
                    </div>

                </div>
                    
                <div className="gameContainer">
                    <div className="gameGrid">
                        {gameContent}
                    </div>
                </div>
            
            </div>
        </div>
        </>
    )
}

export default TwentyFortyEight
