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
                            <Button buttonSize="btn--medium" goHere="https://instagram.com/CMarconius" bTarget="_blank">Instagram</Button>
                            <Button buttonSize="btn--medium" goHere="https://www.facebook.com/cmarconius/" bTarget="_blank">Facebook</Button>
                            <Button buttonSize="btn--medium" goHere="https://github.com/CMarconius" bTarget="_blank">Github</Button>
                         </div>
                    </div>
                </div>


        </>
    )
}

export default Navbar
