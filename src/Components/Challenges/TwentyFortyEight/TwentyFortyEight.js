import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import GameCell from './GameCell'
import gridTemp from './gameGridTemp.png'
import './TwentyFortyEight.css'

function TwentyFortyEight() {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
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
        setCurrentScore(123123);
        setBestScore(1000000);
        setGameButtons(
            <>
            <Button onClick={undoLastMove} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                &#10531; UNDO
            </Button>
            <Button buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                NEW GAME
            </Button>
            </>
        )
        setGameOn(true)
        setGameContent(
            <>
            <div className="cellWrap">
                <GameCell cellId={1}/>
                <GameCell cellId={2}/>
                <GameCell cellId={3}/>
                <GameCell cellId={4}/>
                
                <GameCell cellId={5}/>
                <GameCell cellId={6}/>
                <GameCell cellId={7}/>
                <GameCell cellId={8}/>
                
                <GameCell cellId={9}/>
                <GameCell cellId={10}/>
                <GameCell cellId={11}/>
                <GameCell cellId={12}/>
                
                <GameCell cellId={13}/>                
                <GameCell cellId={14}/>
                <GameCell cellId={15}/>
                <GameCell cellId={16}/>
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
                        <p>20</p>
                        <p>CMarconius</p>
                        <p>48</p>
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

                <div className="instructions">
                    <h2>Join the tiles, get to <strong>2048!</strong></h2>
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
