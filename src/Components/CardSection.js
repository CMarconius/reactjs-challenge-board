import React from 'react'
import Card from './Card'
import SortBubble from './Challenges/SortingAlgo/BubbleSort/SortBubble'
import MyVideoPlayer from './Challenges/VideoPlayer/MyVideoPlayer'
import CompoundCalculator from './Challenges/CompoundCalculator/CompoundCalculator'
import LinkGenerator from './Challenges/CalendarLinkGenerator/Link-Generator'
import CurrencyConverter from './Challenges/CurrencyConverter/CurrencyConverter'
import './styles/CardSection.css'
import TwentyFortyEight from './Challenges/TwentyFortyEight/TwentyFortyEight'
import SortQuick from './Challenges/SortingAlgo/QuickSort/SortQuick'
import Podcasts from './Challenges/Podcasts/Podcasts'
import Pokedex from './Challenges/Pokedex/Pokedex'

function CardSection() {

    return (
        <div className="cardSection">
            <h1>Pick a card, any card</h1>
            <div className="cardsContainer">

                
                {/* ======================================================== */}
                {/* ===================  Simple Projects  ================== */}
                {/* ======================================================== */}


                <div className="cardRow">
                    <Card size="large" challengeName={"Compound Interest Calculator"} thisChallenge={<CompoundCalculator/>}/>
                    <Card size="medium" challengeName={"Calender Link Generator"} thisChallenge={<LinkGenerator/>}/>
                    <Card size="medium" challengeName={"Pokedex"} thisChallenge={<Pokedex/>}/>
                    <Card size="medium" challengeName={"GAME: Twenty Forty Eight"} thisChallenge={<TwentyFortyEight/>}/>
                </div>

                
                {/* ======================================================== */}
                {/* ADD CURRENCY CONVERTER && GOOGLE CALENDAR LINK GENERATOR */}
                {/* ======================================================== */}


                <div className="cardDivider">
                    <h2>Smaller Projects</h2>
                </div>

                <div className="cardRow">
                    <Card size="medium" challengeName={"Currency Converter"} thisChallenge={<CurrencyConverter/>}/>
                    <Card size="medium" challengeName={"Video Player"} thisChallenge={<MyVideoPlayer/>}/>
                    {/* <Card size="medium" challengeName={"Podcasts"} thisChallenge={<Podcasts/>}/> */}
                </div>

                                
                {/* ======================================================== */}
                {/* ADD CURRENCY CONVERTER && GOOGLE CALENDAR LINK GENERATOR */}
                {/* ======================================================== */}


                <div className="cardDivider">
                    <h2>Sorting Algorithms</h2>
                </div>

                <div className="cardRow">
                    <Card size="small" challengeName={"Bubble Sort"} thisChallenge={<SortBubble/>}/>
                    {/* <Card size="medium" challengeName={"Quick Sort"} thisChallenge={<SortQuick/>}/> */}
                </div>



            </div>
        </div>
    )
}

export default CardSection
