import React from 'react'
import './styles/BioSection.css'
import { Button } from './Button'

const BioSection = () => {
    return (
        <>
            <div className="bioSection">
                <div className="bioContainer">
                    
                    <div className="bioLeft">
                        <img src="./images/Profile_Pic.jpg" alt="" className="profilePic" />
                    </div>
                    <div className="bioRight">
                        <div className="bioDescription">
                            <h3>Welcome! I'm Mark Thomas</h3>
                            <p>I am an experienced professional in the areas of Marketing and Web Development. My current objective is to obtain a position that will fully utilize my skills and offer an opportunity for continued professional growth.</p>
                            <p>This is my porfolio website (or my Showcase of Awesomeness). Below you will find some of the projects I've been working on lately on my journey to master ReactJS and Javascript overall.</p>
                        </div>  

                        <div className="contactAndCV">
                            <div className="bioContact">
                                <h3>Contact Details</h3>
                                <p>Mark Thomas</p>
                                <p><strong>Phone:</strong> +44 7412 202 416</p>
                                <p><strong>Email:</strong> marconius.dev@gmail.com</p>
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
