import React from 'react'
import Card from './Card'
import SortBubble from './Challenges/SortBubble'
import MyVideoPlayer from './Challenges/MyVideoPlayer'
import CompoundCalculator from './Challenges/CompoundCalculator/CompoundCalculator'
import './styles/CardSection.css'

function CardSection() {

    return (
        <div className="cardSection">
            <h1>Pick a card, any card</h1>
            <div className="cardsContainer">
                <div className="cardRow">
                    <Card size="small" challengeName={"Bubble Sort"} thisChallenge={<SortBubble/>}/>
                    <Card size="medium" challengeName={"Video Player"} thisChallenge={<MyVideoPlayer/>}/>
                </div>

                <div className="cardDivider">
                    <h2>Larger Projects</h2>
                </div>

                <div className="cardRow">
                    <Card size="large" challengeName={"Compound Interest Calculator"} thisChallenge={<CompoundCalculator/>}/>
                </div>
            </div>
        </div>
    )
}

export default CardSection
