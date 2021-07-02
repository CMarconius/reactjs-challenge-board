import React from 'react'
import './styles/Navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'

function Navbar() {
    return (
        <>
                <div className="nav">
                    <div className="nav-container">
                        <div className="navbar-left">
                            {/* <FontAwesomeIcon classNameName="globe" icon={faGlobeAmericas}/> */}
                            <img src="/images/cm-logo-favicon.png" alt="" />
                            <h2>Curious Marconius</h2>
                        </div>

                        {/* <div className="navbar-center">
                        </div> */}

                        <div className="navbar-right">
                            {/* <h2 classNameName="nav-right-link">Super Link</h2>
                            <h2 classNameName="nav-right-link">Super Link</h2> */}
                            <Button buttonStyle="btn--primary btn-nav" goHere="https://www.youtube.com" bTarget="_blank">Follow My Progress</Button>
                        </div>
                    </div>
                </div>


        </>
    )
}

export default Navbar
