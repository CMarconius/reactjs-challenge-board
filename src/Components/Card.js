import React from 'react'
import './styles/Card.css'

function Card(props) {
    return (
        
        <div className="card">
            <img className="defaultAppearance" src="../images/card-default-img.png" alt="" />
            <div className="innerCardContainer">


                <h2 className="defaultAppearance"></h2>
                <p className="defaultAppearance">This is a lovely, also brief, description of this particular coding sample.</p>

                
                <div className="challengeContainer">
                    <h2>{props.challengeName}</h2>
                    {props.thisChallenge}
                </div>


            </div>
        </div>
    )
}

export default Card
