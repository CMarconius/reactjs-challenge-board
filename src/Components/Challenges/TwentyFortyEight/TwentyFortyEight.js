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
    const [undoPressed, setUndoPressed] = useState(false);

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
    const [previousGridState, setPreviousGridState] = useState([]);

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
                <Button onClick={undoLastMove}  buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    &#10531; UNDO
                </Button>
                <Button onClick={exitCurrentGame} buttonSize="btn--medium" buttonActive="false" goHere="" bTarget="">
                    &#10531; EXIT
                </Button>
                </>
            )
            setGameOn(true);
            moved = 'notMoved';
    }

    function exitCurrentGame() {
        previousGridState = [];
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
        setPreviousGridState(JSON.parse(JSON.stringify(gameCells)));
        setGlobalCells(JSON.parse(JSON.stringify(gameCells)));
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
        let activeCells = [...globalCells];
        let tempPastGrid = JSON.parse(JSON.stringify(globalCells));
        console.log("Temp Grid: ");
        console.log(tempPastGrid);

        moved = 'notMoved';
        
        for (let r = 0; r < 4; r++) {
            for (let c = 1; c < 4; c++) {
                
                let index = (r*4) + c;
                
                var currentCellValue = activeCells[r][c].props["cellValue"];

                if (currentCellValue !== 0) {
                    switch (c) {
                        case 3:
                            if (activeCells[r][c-1].props["cellValue"] === currentCellValue) {
                                activeCells[r][c-1] = newCell((currentCellValue * 2),(index-1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r][c-1].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r][c-2].props["cellValue"] === currentCellValue) {
                                    activeCells[r][c-2] = newCell((currentCellValue * 2),(index-2));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r][c-2].props["cellValue"] === 0) {
                                    //MOVE UP TO NEXT CELL
                                    if (activeCells[r][c-3].props["cellValue"] === currentCellValue) {
                                        activeCells[r][c-3] = newCell((currentCellValue * 2),(index-3));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else if (activeCells[r][c-3].props["cellValue"] === 0) {
                                        activeCells[r][c-3] = newCell(currentCellValue,(index-3));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else {
                                        activeCells[r][c-2] = newCell(currentCellValue,(index-2));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                }
                                else {
                                    activeCells[r][c-1] = newCell(currentCellValue,(index-1));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 2:
                            if (activeCells[r][c-1].props["cellValue"] === currentCellValue) {
                                activeCells[r][c-1] = newCell((currentCellValue * 2),(index-1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r][c-1].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r][c-2].props["cellValue"] === currentCellValue) {
                                    activeCells[r][c-2] = newCell((currentCellValue * 2),(index-2));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r][c-2].props["cellValue"] === 0) {
                                    activeCells[r][c-2] = newCell(currentCellValue,(index-2));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else {
                                    activeCells[r][c-1] = newCell(currentCellValue,(index-1));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 1:
                            if (activeCells[r][c-1].props["cellValue"] === currentCellValue) {
                                activeCells[r][c-1] = newCell((currentCellValue * 2),(index-1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r][c-1].props["cellValue"] === 0) {
                                activeCells[r][c-1] = newCell(currentCellValue,(index-1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                        break;
                    }
                }
                
            }
        }


        if (moved === 'moved') {
            setPreviousGridState(JSON.parse(JSON.stringify(tempPastGrid)));
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
    }

    function moveRight() {
        let tempPastGrid = [...globalCells];
        let activeCells = [...globalCells];

        moved = 'notMoved';
        
        for (let r = 0; r < 4; r++) {           // Loop through bottom 3 rows (staring at second because top row can't move)
            for (let c = 2; c >= 0; c--) {       // Loop through each column
                
                let index = (r*4) + c;
                
                var currentCellValue = activeCells[r][c].props["cellValue"];

                if (currentCellValue !== 0) {
                    switch (c) {
                        case 0:
                            //Cell Is On Top Row
                            if (activeCells[r][c+1].props["cellValue"] === currentCellValue) {
                                activeCells[r][c+1] = newCell((currentCellValue * 2),(index+1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r][c+1].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r][c+2].props["cellValue"] === currentCellValue) {
                                    activeCells[r][c+2] = newCell((currentCellValue * 2),(index+2));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r][c+2].props["cellValue"] === 0) {
                                    //MOVE UP TO NEXT CELL
                                    if (activeCells[r][c+3].props["cellValue"] === currentCellValue) {
                                        activeCells[r][c+3] = newCell((currentCellValue * 2),(index+3));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else if (activeCells[r][c+3].props["cellValue"] === 0) {
                                        activeCells[r][c+3] = newCell(currentCellValue,(index+3));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else {
                                        activeCells[r][c+2] = newCell(currentCellValue,(index+2));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                }
                                else {
                                    activeCells[r][c+1] = newCell(currentCellValue,(index+1));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 1:
                            //Cell Is On 2nd Row
                            if (activeCells[r][c+1].props["cellValue"] === currentCellValue) {
                                activeCells[r][c+1] = newCell((currentCellValue * 2),(index+1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r][c+1].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r][c+2].props["cellValue"] === currentCellValue) {
                                    activeCells[r][c+2] = newCell((currentCellValue * 2),(index+2));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r][c+2].props["cellValue"] === 0) {
                                    activeCells[r][c+2] = newCell(currentCellValue,(index+2));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else {
                                    activeCells[r][c+1] = newCell(currentCellValue,(index+1));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 2:
                            //Cell Is On 3rd Row
                            if (activeCells[r][c+1].props["cellValue"] === currentCellValue) {
                                activeCells[r][c+1] = newCell((currentCellValue * 2),(index+1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r][c+1].props["cellValue"] === 0) {
                                activeCells[r][c+1] = newCell(currentCellValue,(index+1));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                        break;
                    }
                }
                
            }
        }


        if (moved === 'moved') {
            previousGridState = [...tempPastGrid];
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
    }

    function moveDown() {
        let tempPastGrid = [...globalCells];
        let activeCells = [...globalCells];
        
        console.log(activeCells)
        moved = 'notMoved';
        
        for (let r = 2; r >= 0; r--) {
            for (let c = 0; c < 4; c++) {
                
                let index = (r*4) + c;
                
                var currentCellValue = activeCells[r][c].props["cellValue"];

                if (currentCellValue !== 0) {
                    switch (r) {
                        case 0:
                            //Cell Is On Top Row
                            if (activeCells[r+1][c].props["cellValue"] === currentCellValue) {
                                activeCells[r+1][c] = newCell((currentCellValue * 2),(index+4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r+1][c].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r+2][c].props["cellValue"] === currentCellValue) {
                                    activeCells[r+2][c] = newCell((currentCellValue * 2),(index+8));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r+2][c].props["cellValue"] === 0) {
                                    //MOVE UP TO NEXT CELL
                                    if (activeCells[r+3][c].props["cellValue"] === currentCellValue) {
                                        activeCells[r+3][c] = newCell((currentCellValue * 2),(index+12));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else if (activeCells[r+3][c].props["cellValue"] === 0) {
                                        activeCells[r+3][c] = newCell(currentCellValue,(index+12));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                    else {
                                        activeCells[r+2][c] = newCell(currentCellValue,(index+8));
                                        activeCells[r][c] = newCell(0, index);
                                        moved = 'moved';
                                    }
                                }
                                else {
                                    activeCells[r+1][c] = newCell(currentCellValue,(index+4));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 1:
                            //Cell Is On 2nd Row
                            if (activeCells[r+1][c].props["cellValue"] === currentCellValue) {
                                activeCells[r+1][c] = newCell((currentCellValue * 2),(index+4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r+1][c].props["cellValue"] === 0) {
                                //MOVE UP TO NEXT CELL
                                if (activeCells[r+2][c].props["cellValue"] === currentCellValue) {
                                    activeCells[r+2][c] = newCell((currentCellValue * 2),(index+8));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else if (activeCells[r+2][c].props["cellValue"] === 0) {
                                    activeCells[r+2][c] = newCell(currentCellValue,(index+8));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                                else {
                                    activeCells[r+1][c] = newCell(currentCellValue,(index+4));
                                    activeCells[r][c] = newCell(0, index);
                                    moved = 'moved';
                                }
                            }
                        break;
                        case 2:
                            //Cell Is On 3rd Row
                            if (activeCells[r+1][c].props["cellValue"] === currentCellValue) {
                                activeCells[r+1][c] = newCell((currentCellValue * 2),(index+4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                            else if (activeCells[r+1][c].props["cellValue"] === 0) {
                                activeCells[r+1][c] = newCell(currentCellValue,(index+4));
                                activeCells[r][c] = newCell(0, index);
                                moved = 'moved';
                            }
                        break;
                    }
                }
                
            }
        }


        if (moved === 'moved') {
            previousGridState = [...tempPastGrid];
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

    }

    function moveUp() {
        let tempPastGrid = [...globalCells];
        let activeCells = [...globalCells];
        
        moved = 'notMoved';
        
        for (let r = 1; r < 4; r++) {           // Loop through bottom 3 rows (staring at second because top row can't move)
            for (let c = 0; c < 4; c++) {       // Loop through each column
                
                let index = (r*4) + c;
                
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
            previousGridState = [...tempPastGrid];
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
    }

    function undoLastMove() {
        gameCells = JSON.parse(JSON.stringify(globalCells));

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
