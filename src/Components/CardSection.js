import React from 'react'
import Card from './Card'
import SortBubble from './Challenges/SortBubble'
import './styles/CardSection.css'

function CardSection() {

    return (
        <div className="cardSection">
            <h1>Pick a card, any card</h1>
            <div className="cardsContainer">
                <div className="cardRow">
                    <Card challengeName={"Bubble Sort 1"} thisChallenge={<SortBubble/>}/>
                    <Card challengeName={"Bubble Sort 2"} thisChallenge={<SortBubble/>}/>
                </div>
            </div>
        </div>
    )
}

export default CardSection
