import React from 'react'
import Card from './Card'
import './styles/CardSection.css'

function CardSection() {
    return (
        <div className="cardSection">
            <h1>Pick a card, any card! 😎</h1>
            <div className="cardcontainer">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default CardSection
