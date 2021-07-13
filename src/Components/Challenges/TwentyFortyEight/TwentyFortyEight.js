import react from 'react'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { Button } from '../../Button'
import GameCell from './GameCell'
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

    const [gameCells, setGameCells] = useState([])


    function undoLastMove() {
        setCurrentGridState(...[previousGridState]);
        setPreviousGridState([]);
        setGameContent(
            <Button onClick={startGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                START GAME
            </Button>
        )
        
        setGameOn(false);
        setGameCells([])
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
        
        
    }, [])

    useEffect(() => {
        if (gameOn) {
            setGameContent(
                <div className="cellWrap">
                    {
                        gameCells.map(cell => {
                            return cell;
                        })
                    }
                </div>
            )
        }
        
    }, [gameCells])
        
    useEffect(() => {
        resetCells();
    }, [gameOn])

    function resetCells() {
        for (let i = 1; i < 17; i++) {     
            
            // let newCell = <GameCell cellId={i} cellValue={(Math.pow(2, (Math.floor(Math.random() * 13))))}/>
            
            let newCell = <GameCell key={i} cellId={i} cellValue={0}/>
            
            setGameCells(gameCells => [...gameCells, newCell]);
        }
        if (gameOn) {
            if (!isMobile) {
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
            }

            // let startCells = [...gameCells];

            // startCells[5].props["cellValue"]

            // setGameCells({...gameCells, []});


            let k = Math.floor(Math.random() * 16);
            const startCells = gameCells.map((item, i) => {
                if (i === k) {
                  const updatedItem = {
                    ...item,
                    props: {cellId: (k+1), cellValue: 2},
                  };
                  
                  return updatedItem;
                }
           
                return item;
              });
              
            setGameCells([...startCells]);
        }
    }

    function startGame() {
        if (!gameOn) {
            setCurrentScore(123123);
            setBestScore(1000000);
            setGameButtons(
                <>
                <Button onClick={undoLastMove} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    &#10531; UNDO
                </Button>
                <Button onClick={startGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    NEW GAME
                </Button>
                </>
            )
        }
        else {
            resetCells();
        }
       
        setGameOn(true)
        
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
