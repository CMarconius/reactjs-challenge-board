import React, { useState, useEffect } from 'react'
import './GameCell.css'

function GameCell(props) {
    
    const [cellValue, setCellValue] = useState(props.cellValue)
    const [cellId, setCellID] = useState(props.cellId);


    useEffect(() => {
        setCellValue(props.cellValue);
        setCellID(props.cellId);
    }, [props]);

    // const [cellUp, setCellUp] = useState(cellId-4);
    // const [cellRight, setCellRight] = useState(cellId+1);
    // const [cellDown, setCellDown] = useState(cellId+4);
    // const [cellLeft, setCellLeft] = useState(cellId-1);

    return (
        <>
            <div className={`gameCell tile-${props.cellValue}`}>
                {props.cellValue}
                {/* {cellId} */}
                {/* <div className="cellUp">{cellUp}</div>
                <div className="cellRight">{cellRight}</div>
                <div className="cellDown">{cellDown}</div>
                <div className="cellLeft">{cellLeft}</div> */}
            </div>
        </>
    )
}

export default GameCell