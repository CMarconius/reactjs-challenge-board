import React from 'react'
import Card from './Card'
import SortBubble from './Challenges/SortingAlgo/BubbleSort/SortBubble'
import MyVideoPlayer from './Challenges/VideoPlayer/MyVideoPlayer'
import CompoundCalculator from './Challenges/CompoundCalculator/CompoundCalculator'
import LinkGenerator from './Challenges/CalendarLinkGenerator/Link-Generator'
import './styles/CardSection.css'
import CurrencyConverter from './Challenges/CurrencyConverter/CurrencyConverter'

function CardSection() {

    return (
        <div className="cardSection">
            <h1>Pick a card, any card</h1>
            <div className="cardsContainer">

                
                {/* ======================================================== */}
                {/* ===================  Simple Projects  ================== */}
                {/* ======================================================== */}


                <div className="cardRow">
                    <Card size="medium" challengeName={"Video Player"} thisChallenge={<MyVideoPlayer/>}/>
                    <Card size="medium" challengeName={"Currency Converter"} thisChallenge={<CurrencyConverter/>}/>
                </div>

                
                {/* ======================================================== */}
                {/* ADD CURRENCY CONVERTER && GOOGLE CALENDAR LINK GENERATOR */}
                {/* ======================================================== */}


                <div className="cardDivider">
                    <h2>Larger Projects</h2>
                </div>

                <div className="cardRow">
                    <Card size="medium" challengeName={"Calender Link Generator"} thisChallenge={<LinkGenerator/>}/>
                    <Card size="large" challengeName={"Compound Interest Calculator"} thisChallenge={<CompoundCalculator/>}/>
                </div>

                                
                {/* ======================================================== */}
                {/* ADD CURRENCY CONVERTER && GOOGLE CALENDAR LINK GENERATOR */}
                {/* ======================================================== */}


                <div className="cardDivider">
                    <h2>Sorting Algorithms</h2>
                </div>

                <div className="cardRow">
                    <Card size="small" challengeName={"Bubble Sort"} thisChallenge={<SortBubble/>}/>
                </div>



            </div>
        </div>
    )
}

export default CardSection
