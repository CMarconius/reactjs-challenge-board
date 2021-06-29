import React from 'react'
import './styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'

function Navbar() {
    return (
        <>
                <div class="nav">
                    <div class="nav-container">
                        <div class="navbar-left">
                            {/* <FontAwesomeIcon className="globe" icon={faGlobeAmericas}/> */}
                            <img src="/images/cm-logo-favicon.png" alt="" />
                            <h2>Curious Marconius</h2>
                        </div>

                        {/* <div class="navbar-center">
                        </div> */}

                        <div class="navbar-right">
                            {/* <h2 className="nav-right-link">Super Link</h2>
                            <h2 className="nav-right-link">Super Link</h2> */}
                            <Button buttonStyle="btn--primary btn-nav" goHere="https://www.youtube.com">Follow My Progress</Button>
                        </div>
                    </div>
                </div>


        </>
    )
}

export default Navbar
