import React, { useEffect, useState } from 'react'
import './styles/Card.css'

function Card(props) {

    const heroImage = <img src="./images/card-default-img.png" alt="" />;
    
    return (
        <div onClick={props.onClick} className={"card"}>
            {heroImage}
            
            <div className="innerCardContainer">
                <h2>{props.challengeName}</h2>
                <p className="expand">Click to Expand</p>
            </div>
        </div>
    )
}

export default Card
