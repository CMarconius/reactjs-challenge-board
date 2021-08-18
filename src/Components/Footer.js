import React from 'react'
import './styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'

function Footer() {
    return (
        <>
        <div className="footer">
            <h2>
                <a href="http://cmarconius.com/react3/" target="_blank" rel="noreferrer">
                    <Button buttonSize="btn--medium" goHere="https://github.com/CMarconius" bTarget="_blank">Github</Button>
                </a>
            </h2>
        </div>
        </>
    )
}

export default Footer
