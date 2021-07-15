import React, { useState, useEffect } from 'react'
import './GameCell.css'

function GameCell(props) {
    
    const [cellValue, setCellValue] = useState(0)
    const [cellId, setCellID] = useState(props.cellId);


    const [cellUp, setCellUp] = useState(cellId-4);
    const [cellRight, setCellRight] = useState(cellId+1);
    const [cellDown, setCellDown] = useState(cellId+4);
    const [cellLeft, setCellLeft] = useState(cellId-1);

    useEffect(() => {
        // var x = Math.floor(Math.random() * cellOptions.length);
        // setCellValue(cellOptions[x])
        if (props.cellValue) {setCellValue(props.cellValue)};
    }, [])

    return (
        <>

            <div className={`gameCell tile-${cellValue}`}>
                {cellValue}
                {/* {cellId} */}
                <div className="cellUp">{cellUp}</div>
                <div className="cellRight">{cellRight}</div>
                <div className="cellDown">{cellDown}</div>
                <div className="cellLeft">{cellLeft}</div>
            </div>
        </>
    )
}

export default GameCell