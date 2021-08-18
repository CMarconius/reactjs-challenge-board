import React from 'react'
import './styles/BioSection.css'
import { Button } from './Button'

const BioSection = () => {
    return (
        <>
            <div className="bioSection">
                <div className="bioContainer">
                    
                    <div className="bioLeft">
                        <img src="images/Profile_Pic.jpg" alt="" className="profilePic" />
                    </div>
                    <div className="bioRight">
                        <div className="bioDescription">
                            <h3>About Me</h3>
                            <p>Greetings! My name is Mark, I'm a ReactJS and React Native Developer. I've been working as a Web Developer for a few years now, and I'm now looking to join a team of developers to share my experience and to grow more than ever before.</p>
                        </div>  

                        <div className="contactAndCV">
                            <div className="bioContact">
                                <h3>Contact Details</h3>
                                <p>Mark Thomas</p>
                                <p>+44 7412 202 416</p>
                                <p>marconius.dev@gmail.com</p>
                            </div>

                            <div className="bioCV">
                                <Button buttonSize="btn--medium" goHere="https://cmarconius.com/mark-thomas-cv.pdf" bTarget="_blank">Download CV</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>  
        </>
    )
}

export default BioSection
