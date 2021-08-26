import React, { useState } from 'react'
import Card from './Card'
import CardPopup from './CardPopup'
import SortBubble from './Challenges/SortingAlgo/BubbleSort/SortBubble'
import MyVideoPlayer from './Challenges/VideoPlayer/MyVideoPlayer'
import CompoundCalculator from './Challenges/CompoundCalculator/CompoundCalculator'
import LinkGenerator from './Challenges/CalendarLinkGenerator/Link-Generator'
import CurrencyConverter from './Challenges/CurrencyConverter/CurrencyConverter'
import './styles/CardSection.css'
import TwentyFortyEight from './Challenges/TwentyFortyEight/TwentyFortyEight'
import Pokedex from './Challenges/Pokedex/Pokedex'
import { LoadingBoxes } from './Challenges/LoadingBoxes/LoadingBoxes'

function CardSection() {


    //====================================================//
    //===============        State         ===============//
    //====================================================//

    const [popupActive, setPopupActive] = useState(false);

    const [currentChallenge, setCurrentChallenge] = useState();
    const [currentChallengeName, setCurrentChallengeName] = useState();
    const [currentChallengeSize, setCurrentChallengeSize] = useState();
    const [currentChallengeDescription, setCurrentChallengeDescription] = useState();




    
    //====================================================//
    //=============        Functions         =============//
    //====================================================//
    function togglePopup() {
        setPopupActive(!popupActive);
    }

    function activatePopup(challenge, challengeName, size, description) {
        setPopupActive(true);

        setCurrentChallenge(challenge);
        setCurrentChallengeName(challengeName);
        setCurrentChallengeSize(size);
        setCurrentChallengeDescription(description);
    }


    return (
        <div className="cardSection">
            
            {popupActive ? <CardPopup togglePopup={togglePopup} description={currentChallengeDescription} challengeName={currentChallengeName} size={currentChallengeSize} popupContent={currentChallenge}/> : null}
                
            {/* //====================================================// */}
            {/* //==============        Projects         =============// */}
            {/* //====================================================// */}
            
            <div className="cardSectionTitle">
                <h1>Pick a card, any card</h1>
            </div>
            
            <div className="cardsContainer">

                <div className="cardRow">
                    <Card onClick={() => {activatePopup(<CompoundCalculator/>, "Compound Interest Calculator", "large")}} challengeName={"Compound Interest Calculator"}/>
                    <Card onClick={() => {activatePopup(<Pokedex/>, "Pokedex", "medium", "Pokedex made using pokeapi.co API")}} challengeName={"Pokedex"}/>
                    <Card onClick={() => {activatePopup(<TwentyFortyEight boxCount={2} colorful={true}/>, "GAME: Twenty Forty Eight", "medium", "Pokedex made using pokeapi.co API")}} challengeName={"GAME: Twenty Forty Eight"}/>
                    <Card onClick={() => {activatePopup(<LinkGenerator/>, "Calender Link Generator", "medium")}} challengeName={"Calender Link Generator"}/>
                </div>


                <div className="cardDivider">
                    <h2>Smaller Projects</h2>
                </div>

                <div className="cardRow">
                    <Card onClick={() => {activatePopup(<CurrencyConverter/>, "Currency Converter", "medium")}} challengeName={"Currency Converter"}/>
                    <Card onClick={() => {activatePopup(<LoadingBoxes boxCount={10} timeGap={110} colorful={true}/>, "Loading", "small", "This is a custom loading animation made with css")}} challengeName={"Loading"}/>
                    <Card onClick={() => {activatePopup(<MyVideoPlayer/>, "Video Player", "medium", "This is a video I made back in college...")}} challengeName={"Video Player"}/>
                    <Card onClick={() => {activatePopup(<SortBubble/>, "Bubble Sort", "small")}} challengeName={"Bubble Sort"}/>
                </div>



            </div>
        </div>
    )
}

export default CardSection
