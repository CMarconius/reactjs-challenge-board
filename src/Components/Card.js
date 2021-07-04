import React from 'react'
import './styles/Card.css'

function Card(props) {
    return (
        
        <div className={"card " + props.size}>
            <img className="defaultAppearance" src="../images/card-default-img.png" alt="" />
            <div className="innerCardContainer">


                <h2 className="defaultAppearance">{props.challengeName}</h2>

                
                <div className="challengeContainer">
                    <h2>{props.challengeName}</h2>
                    {props.thisChallenge}
                </div>


            </div>
        </div>
    )
}

export default Card
