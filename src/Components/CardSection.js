import React from 'react'
import Card from './Card'
import SortBubble from './Challenges/SortBubble'
import MyVideoPlayer from './Challenges/MyVideoPlayer'
import './styles/CardSection.css'

function CardSection() {

    return (
        <div className="cardSection">
            <h1>Pick a card, any card</h1>
            <div className="cardsContainer">
                <div className="cardRow">
                    <Card size="medium" challengeName={"Bubble Sort 1"} thisChallenge={<SortBubble/>}/>
                    <Card size="medium" challengeName={"Video Player"} thisChallenge={<MyVideoPlayer/>}/>
                </div>
            </div>
        </div>
    )
}

export default CardSection
