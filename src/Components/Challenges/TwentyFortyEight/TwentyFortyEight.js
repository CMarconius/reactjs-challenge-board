import react from 'react'
import React, { useEffect, useState, useCallback } from 'react'
import { isMobile } from 'react-device-detect'
import { Button } from '../../Button'
import GameCell from './GameCell'
import './TwentyFortyEight.css'

function TwentyFortyEight() {

    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [gameOn, setGameOn] = useState(false);
    const [currentGridState, setCurrentGridState] = useState([]);
    const [previousGridState, setPreviousGridState] = useState([]);

    const [gameButtons, setGameButtons] = useState();
    const [gameContent, setGameContent] = useState(        
        <div className="startGame">      
            <Button onClick={startNewGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                START NEW GAME
            </Button>
        </div>
    );

    const [gameCells, setGameCells] = useState([]);

    

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleUserKeyPress);
        };
      }, [handleUserKeyPress]);

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
    }, [gameCells]);

    function startNewGame() {
            setCurrentScore(123123);
            setBestScore(1000000);
            setCells();
            setGameButtons(
                <>
                <Button onClick={exitCurrentGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    &#10531; EXIT
                </Button>
                {/* <Button onClick={startNewGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    NEW GAME
                </Button> */}
                </>
            )
            setGameOn(true);
            
            // if (!isMobile) {
            //     window.addEventListener('keydown', setDirectionsKeys);
            // }
    }

    function exitCurrentGame() {
        setCurrentGridState(...[previousGridState]);
        setPreviousGridState([]);
        setGameOn(false);
        setGameButtons();
        setGameContent(
            <div className="startGame">      
                <Button onClick={startNewGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    START NEW GAME
                </Button>
            </div>
        );
        
        setGameOn(false);
        setGameCells([]);
        // window.removeEventListener('keydown', setDirectionsKeys);
    }

    function setCells() {
        let k = Math.floor(Math.random() * 16);
        for (let i = 0; i < 16; i++) {     
            
            // setGameCells(gameCells => [...gameCells, (<GameCell key={i} cellId={i} cellValue={(Math.pow(2, (Math.floor(Math.random() * 12))))}/>)]);
            
            if (i !== 14 && i !== 4 && i !== 11 && i !== 12) {
                setGameCells(gameCells => [...gameCells, (<GameCell key={i} cellId={i} cellValue={0}/>)]);
            }
            else {
                setGameCells(gameCells => [...gameCells, (<GameCell key={i} cellId={i} cellValue={2}/>)]);
            }
        }
    }

    function handleUserKeyPress(event) {
        if (gameOn) {
            event.preventDefault();
            if (event.key === "ArrowUp") {
                moveUp();
            }
            if (event.key === "ArrowRight") {
                moveRight();
            }
            if (event.key === "ArrowDown") {
                moveDown();
            }
            if (event.key === "ArrowLeft") {
                moveLeft();
            }
        }
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

    function moveUp() {
        console.log("Move Up");

        let gameCellsClone = [...gameCells];

        let startCells = [];

        gameCells.map((item, i) => {
            // console.log(i);
            if (item.props['cellValue'] !== 0) {
                if (gameCellsClone[(i-4)] && gameCellsClone[(i-4)].props["cellValue"] === 0) {
                    if (gameCellsClone[(i-8)] && gameCellsClone[(i-8)].props["cellValue"] === 0) {
                        if (gameCellsClone[(i-12)] && gameCellsClone[(i-12)].props["cellValue"] === 0) {
                            console.log("The cell is on the bottom row...");
                            

                            gameCells.forEach((item,it) => {
                                if ((i-12) === it) {
                                    startCells.push(<GameCell key={it} cellId={it} cellValue={2}/>);
                                } else if ((i) === it) {
                                    startCells.push(<GameCell key={it} cellId={it} cellValue={0}/>);
                                }
                                else startCells.push(item);
                            })
                            
                            console.log(startCells);
                            setGameCells([...startCells]);
                            startCells = [];
                        }   YO!!!
                        else {
                            console.log("The cell is on the 3rd row...");

                            gameCells.forEach((item,it) => {
                                if ((i-8) === it) {
                                    startCells.push(<GameCell key={it} cellId={it} cellValue={2}/>);
                                } else if ((i) === it) {
                                    startCells.push(<GameCell key={it} cellId={it} cellValue={0}/>);
                                }
                                else startCells.push(item);
                            })

                            console.log(startCells);
                            setGameCells([...startCells]);
                            startCells = [];
                        }
                    }
                    else {
                        console.log("The cell is on the 2nd row...");
                        
                        gameCells.forEach((item,it) => {
                            if ((i-4) === it) {
                                startCells.push(<GameCell key={it} cellId={it} cellValue={2}/>);
                            } else if ((i) === it) {
                                startCells.push(<GameCell key={it} cellId={it} cellValue={0}/>);
                            }
                            else startCells.push(item);
                        })

                        console.log(startCells);
                        setGameCells([...startCells]);
                        startCells = [];
                    }
                }
                else {
                    console.log("The cell is  on the top row...");
                }
            }
        })
    
        // console.log(gameCells);
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
