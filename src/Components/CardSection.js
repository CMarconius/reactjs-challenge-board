import React from 'react'
import Card from './Card'
import './styles/CardSection.css'

function CardSection() {
    return (
        <div className="cardSection">
            <h1>Pick a card, any card</h1>
            <div className="cardsContainer">
                <div className="cardRow">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default CardSection
