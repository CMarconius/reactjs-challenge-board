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

    var gameCells = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
    var simpleCells = [...gameCells];

    var moved = 'notMoved';

    const [globalCells, setGlobalCells] = useState([...gameCells]);

    

    

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
            moved = 'notMoved';
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
        simpleCells = [];
        setGlobalCells([]);
    }

    function setCells() {
        gameCells = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 4; k++) {
                let index = (i*4) + k;

                if (index !== 14 && index !== 4 && index !== 11 && index !== 12 && index !== 0 && index !== 7) {
                // if (i !== 1 && i !== 2 && i !== 7 && i !== 11) {
                    gameCells[i][k] = newCell(0, index);
                }
                else {
                    gameCells[i][k] = newCell(2, index);
                }
            }
        }
        
        simpleCells = [];

        gameCells.map((item) => {
            item.map(cell => {
                simpleCells.push(cell);
            })
        });

        setGameContent(
            <div className="cellWrap">
                {
                    simpleCells.map(cell => {
                        return cell;
                    })
                }
            </div>
        )
        setGlobalCells([...gameCells]);
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

    function newCell(value, id) {
        return (<GameCell key={id} cellId={id} cellValue={value}/>);
    }

    function addNewCellToGame() {
        gameCells = [...globalCells];
        simpleCells = [];

        globalCells.map((item) => {
            item.map(cell => {
                simpleCells.push(cell);
            })
        });

        let freeCells = [];

        simpleCells.forEach((item, i) => {
            if (item.props['cellValue'] === 0) {
                freeCells.push(i);
            }
        });

        let newCellIndex = freeCells[Math.floor(Math.random() * (freeCells.length))];

        let x = Math.random();
        
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < 4; k++) {
                let index = (i*4) + k;
                if (newCellIndex === index) {
                    if (x > 0.2) {
                        gameCells[i][k] = newCell((2), index);
                    }
                    else gameCells[i][k] = newCell((4), index);
                }
            }
        }

        gameCells.map((item) => {
            item.map(cell => {
                simpleCells.push(cell);
            })
        });

        setGlobalCells([...gameCells]);

    }

    function moveLeft() {

    }

    function moveRight() {
        
    }

    function moveDown() {
    }


    function moveUp() {

        let activeCells = [...globalCells];
        
        moved = 'notMoved';
        
        for (let r = 1; r < 4; r++) {           // Loop through bottom 3 rows (staring at second because top row can't move)
            for (let c = 0; c < 4; c++) {       // Loop through each column
                
                let index = (r*4) + c;
                // console.log("Current Cell:");
                // console.log(gameCells[r])
                
                var currentCellValue = activeCells[r][c].props["cellValue"];

                if (currentCellValue !== 0) {
                    switch (r) {
                        case 3:
                            //Cell Is On Bottom Row
                            if (activeCells[r-1][c].props["cellValue"] === currentCellValue) {
                                activeCells[r-1][c] = newCell((currentCellValue * 2),(index-4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r-1][c].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r-2][c].props["cellValue"] === currentCellValue) {
                                    activeCells[r-2][c] = newCell((currentCellValue * 2),(index-8));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r-2][c].props["cellValue"] === 0) {
                                    //MOVE UP TO NEXT CELL
                                    if (activeCells[r-3][c].props["cellValue"] === currentCellValue) {
                                        activeCells[r-3][c] = newCell((currentCellValue * 2),(index-12));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else if (activeCells[r-3][c].props["cellValue"] === 0) {
                                        activeCells[r-3][c] = newCell(currentCellValue,(index-12));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else {
                                        activeCells[r-2][c] = newCell(currentCellValue,(index-8));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                }
                                else {
                                    activeCells[r-1][c] = newCell(currentCellValue,(index-4));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 2:
                            //Cell Is On 3rd Row
                            if (activeCells[r-1][c].props["cellValue"] === currentCellValue) {
                                activeCells[r-1][c] = newCell((currentCellValue * 2),(index-4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r-1][c].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r-2][c].props["cellValue"] === currentCellValue) {
                                    activeCells[r-2][c] = newCell((currentCellValue * 2),(index-8));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r-2][c].props["cellValue"] === 0) {
                                    activeCells[r-2][c] = newCell(currentCellValue,(index-8));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else {
                                    activeCells[r-1][c] = newCell(currentCellValue,(index-4));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 1:
                            //Cell Is On Second Row
                            if (activeCells[r-1][c].props["cellValue"] === currentCellValue) {
                                activeCells[r-1][c] = newCell((currentCellValue * 2),(index-4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r-1][c].props["cellValue"] === 0) {
                                activeCells[r-1][c] = newCell(currentCellValue,(index-4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                        break;
                    }
                }
                
            }
        }


        if (moved === 'moved') {
            addNewCellToGame();
            moved = 'notMoved';
        }
                
        simpleCells = [];

        activeCells.map((item) => {
            item.map(cell => {
                simpleCells.push(cell);
            })
        });

        setGameContent(
            <div className="cellWrap">
                {
                    simpleCells.map(cell => {
                        return cell;
                    })
                }
            </div>
        )


        // gameCells.forEach((item, i) => {
        //     let currentCellValue = gameCells[(i)].props["cellValue"];

        //     if (item.props['cellValue'] !== 0) {
        //         if (gameCells[(i-4)]) {
        //             if (gameCells[(i-4)].props["cellValue"] === currentCellValue) {
        //                 gameCells[i-4] = newCell((currentCellValue * 2),(i-4));
        //                 gameCells[i] = newCell(0, i);
        //                 moved = 'moved';
        //             }
        //             else if (gameCells[(i-4)].props["cellValue"] === 0) {
        //                 if (gameCells[(i-8)]) {
        //                     if (gameCells[(i-8)].props["cellValue"] === currentCellValue) {
        //                         gameCells[i-8] = newCell((currentCellValue * 2),(i-8));
        //                         gameCells[i] = newCell(0, i);
        //                         moved = 'moved';
        //                     }
        //                     else if (gameCells[(i-8)].props["cellValue"] === 0) {
        //                         if (gameCells[(i-12)]) {
        //                             if (gameCells[(i-12)].props["cellValue"] === currentCellValue) {
        //                                 gameCells[i-12] = newCell((currentCellValue * 2),(i-12));
        //                                 gameCells[i] = newCell(0, i);
        //                                 moved = 'moved';
        //                             }
        //                             else if (gameCells[(i-12)].props["cellValue"] === 0) {
        //                                 gameCells[i-12] = newCell(currentCellValue,(i-12));
        //                                 gameCells[i] = newCell(0, i);
        //                                 moved = 'moved';
        //                             }
        //                             else {
        //                                 gameCells[i-8] = newCell(currentCellValue,(i-8));
        //                                 gameCells[i] = newCell(0, i);
        //                                 moved = 'moved';
        //                             }
        //                         }
        //                         else {
        //                             gameCells[i-8] = newCell(currentCellValue,(i-8));
        //                             gameCells[i] = newCell(0, i);
        //                             moved = 'moved';
        //                         }
        //                     }
        //                     else {
        //                         gameCells[i-4] = newCell(currentCellValue,(i-4));
        //                         gameCells[i] = newCell(0, i);
        //                         moved = 'moved';
        //                     }
        //                 }
        //                 else {
        //                     gameCells[i-4] = newCell(currentCellValue,(i-4));
        //                     gameCells[i] = newCell(0, i);
        //                     moved = 'moved';
        //                 }
        //             }                        
        //         }
        //     }
        // })
        
        // setSuperCells(gameCells);
        
        // if (moved === 'moved') {
        //     addNewCellToGame();
                            
        //     moved = 'notMoved';
        // }
        
        // setGameContent(
        //     <div className="cellWrap">
        //         {
        //             gameCells.map(cell => {
        //                 return cell;
        //             })
        //         }
        //     </div>
        // )
        
        // setSuperCells(gameCells);
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
