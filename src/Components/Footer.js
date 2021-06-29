import React from 'react'
import './styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
        <div className="footer">
            <h2>
                <a href="http://cmarconius.com/react3/" target="_blank">
                    Check out some of my other work <FontAwesomeIcon className="footer-icon" icon={faArrowRight}/>
                </a>
            </h2>
        </div>
        </>
    )
}

export default Footer
