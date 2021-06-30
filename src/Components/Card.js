import React from 'react'
import './styles/Card.css'

function Card() {
    return (
        <div className="card">
            <img src="../images/card-default-img.png" alt="" />
            <div className="innerCardContainer">
                <h2>Sorting Algorithm: bubble</h2>
                <p>This is a lovely, also brief, description of this particular coding sample.</p>
            </div>
        </div>
    )
}

export default Card
