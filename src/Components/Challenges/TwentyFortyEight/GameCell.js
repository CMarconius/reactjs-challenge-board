import React, { useState, useEffect } from 'react'
import './GameCell.css'

function GameCell(props) {
    
    const [cellValue, setCellValue] = useState()
    const [cellOptions, setCellOptions] = useState([2,4,8,16,32,64,128,256,512,1024,2048])
    const [cellId, setCellID] = useState(props.cellId);

    useEffect(() => {
        var x = Math.floor(Math.random() * cellOptions.length);
        setCellValue(cellOptions[x])
    }, [])

    return (
        <>

            <div className={`gameCell tile-${cellValue}`}>
                {cellValue}
                <div className="cellId">{cellId}</div>
            </div>
        </>
    )
}

export default GameCell
