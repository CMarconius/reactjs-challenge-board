import React from 'react'
import './styles/Footer.css'
import { Button } from './Button'

function Footer() {
    return (
        <>
        <div className="footer">
            <h2>
                <Button buttonSize="btn--medium" goHere="https://github.com/CMarconius" bTarget="_blank">Github</Button>
            </h2>
        </div>
        </>
    )
}

export default Footer
