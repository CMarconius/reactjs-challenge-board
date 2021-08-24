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
import SortQuick from './Challenges/SortingAlgo/QuickSort/SortQuick'
import Podcasts from './Challenges/Podcasts/Podcasts'
import Pokedex from './Challenges/Pokedex/Pokedex'
import { LoadingBoxes } from './Challenges/LoadingBoxes/LoadingBoxes'
import { Button } from './Button'

function CardSection() {

    const [popupActive, setPopupActive] = useState(false);
    const [popupContent, setPopupContent] = useState(<Pokedex/>);

    function togglePopup() {
        setPopupActive(!popupActive);
    }

    function activatePopup(challenge, ChallengeName, size, description) {
        setPopupActive(true);
        
        setPopupContent(
            <CardPopup challengeName={ChallengeName} description={description} togglePopup={togglePopup} size={size} popupContent={challenge}/>
        )
    }


    return (
        <div className="cardSection">
            
            {/* {popupActive ? <CardPopup challengeName={"Loading"} togglePopup={togglePopup} size={"medium"} popupContent={<Pokedex/>}/> : null} */}
            {/* {popupActive ? <CardPopup challengeName={"Loading"} togglePopup={togglePopup} size={"large"} popupContent={<CompoundCalculator/>}/> : null} */}
            {/* {popupActive ? <CardPopup challengeName={"Loading"} togglePopup={togglePopup} size={"medium"} popupContent={<TwentyFortyEight boxCount={2} colorful={true}/>}/> : null} */}
            {/* {popupActive ? <CardPopup challengeName={"Loading"} togglePopup={togglePopup} size={"medium"} popupContent={<LinkGenerator/>}/> : null} */}
            {/* {popupActive ? <CardPopup challengeName={"Loading"} togglePopup={togglePopup} size={"medium"} popupContent={<CurrencyConverter/>}/> : null} */}
            {/* {popupActive ? <CardPopup challengeName={"Loading"} togglePopup={togglePopup} size={"small"} popupContent={<LoadingBoxes boxCount={10} timeGap={110} colorful={true}/>}/> : null} */}
            {popupActive ? <CardPopup challengeName={"Loading"} togglePopup={togglePopup} size={"medium"} popupContent={popupContent}/> : null}
            {/* {popupActive ? {popupContent} : null} */}
            
            <Button buttonActive={true} onClick={togglePopup}>Popup!</Button>
            
            <div className="cardSectionTitle">
                <h1>Pick a card, any card</h1>
            </div>
            
            <div className="cardsContainer">

                {/* ======================================================== */}
                {/* ===================  Simple Projects  ================== */}
                {/* ======================================================== */}

                {/* function activatePopup(challenge, ChallengeName, size, description) { */}

                <div className="cardRow">
                    {/* <Card challengeName={"Compound Interest Calculator"} onClick={activatePopup((() => { return <CompoundCalculator/>}), "Compound Interest Calculator", "large")}/> */}
                    <Card size="large" challengeName={"Compound Interest Calculator"} thisChallenge={<CompoundCalculator/>}/>
                    <Card size="medium" challengeName={"Pokedex"} thisChallenge={<Pokedex/>} description={"Pokedex made using pokeapi.co API"}/>
                    <Card size="medium" challengeName={"GAME: Twenty Forty Eight"} thisChallenge={<TwentyFortyEight boxCount={2} colorful={true}/>}/>
                    <Card size="medium" challengeName={"Calender Link Generator"} thisChallenge={<LinkGenerator/>}/>
                </div>

                
                {/* ======================================================== */}
                {/* ADD CURRENCY CONVERTER && GOOGLE CALENDAR LINK GENERATOR */}
                {/* ======================================================== */}


                <div className="cardDivider">
                    <h2>Smaller Projects</h2>
                </div>

                <div className="cardRow">
                    <Card size="medium" challengeName={"Currency Converter"} thisChallenge={<CurrencyConverter/>}/>
                    <Card size="small" challengeName={"Loading"} thisChallenge={<LoadingBoxes boxCount={10} timeGap={110} colorful={true}/>} description={"This is a custom loading animation made with css"}/>
                    <Card size="medium" challengeName={"Video Player"} thisChallenge={<MyVideoPlayer/>} description={"This is a video I made back in college..."}/>
                    <Card size="small" challengeName={"Bubble Sort"} thisChallenge={<SortBubble/>}/>
                    {/* <Card size="medium" challengeName={"Podcasts"} thisChallenge={<Podcasts/>}/> */}
                </div>

{/* 
                <div className="cardDivider">
                    <h2>Sorting Algorithms</h2>
                </div>

                <div className="cardRow">
                    {/* <Card size="medium" challengeName={"Quick Sort"} thisChallenge={<SortQuick/>}/>
                </div> */}



            </div>
        </div>
    )
}

export default CardSection
