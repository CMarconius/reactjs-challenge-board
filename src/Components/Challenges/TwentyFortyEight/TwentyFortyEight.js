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

    var gameCells = [];

    
    const [superCells, setSuperCells] = useState([]);

    

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleUserKeyPress);
        };
      }, [handleUserKeyPress]);
      

    function startNewGame() {
            setCurrentScore(123123);
            setBestScore(1000000);
            setCells();
            setGameButtons(
                <>
                <Button onClick={exitCurrentGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    &#10531; EXIT
                </Button>
                </>
            )
            setGameOn(true);
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
        gameCells = [];
    }

    function setCells() {
        for (let i = 0; i < 16; i++) {
            if (i !== 14 && i !== 4 && i !== 11 && i !== 12) {
                gameCells.push(<GameCell key={i} cellId={i} cellValue={0}/>);
            }
            else {
                gameCells.push(<GameCell key={i} cellId={i} cellValue={2}/>);
            }
        }
    
        setGameContent(
            <div className="cellWrap">
                {
                    gameCells.map(cell => {
                        return cell;
                    })
                }
            </div>
        )
        setSuperCells(gameCells);
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
        gameCells = superCells;

        gameCells.forEach((item, i) => {
            console.log("is it even getting here? :P");
            if (item.props['cellValue'] !== 0) {
                if (gameCells[(i-4)] && gameCells[(i-4)].props["cellValue"] === 0) {
                    if (gameCells[(i-8)] && gameCells[(i-8)].props["cellValue"] === 0) {
                        if (gameCells[(i-12)] && gameCells[(i-12)].props["cellValue"] === 0) {

                            gameCells[i-12] = (<GameCell key={i-12} cellId={i-12} cellValue={2}/>);
                            gameCells[i] = (<GameCell key={i} cellId={i} cellValue={0}/>);

                        }
                        else {

                            gameCells[i-8] = (<GameCell key={i-8} cellId={i-8} cellValue={2}/>);
                            gameCells[i] = (<GameCell key={i} cellId={i} cellValue={0}/>);

                        }
                    }
                    else {

                        gameCells[i-4] = (<GameCell key={i-4} cellId={i-4} cellValue={2}/>);
                        gameCells[i] = (<GameCell key={i} cellId={i} cellValue={0}/>);

                    }
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

        setSuperCells(gameCells);
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
