import React, { useState } from 'react'
import './GameCell.css'

function GameCell() {
    
    const [cellValue, setCellValue] = useState(1024)


    return (
        <>
            <div className="gameCell">
                {cellValue}
            </div>
        </>
    )
}

export default GameCell
