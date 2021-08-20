import React from 'react';
import './styles/Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--primary btn-nav']

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({buttonActive, children, type, linkTo, onClick, buttonStyle, buttonSize, goHere, bTarget}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

    const buttonTarget= bTarget ? bTarget : "";

    const goToLink =  goHere ? goHere : '';

    return (
        <div to={linkTo} className='btn-mobile'>
            
                {buttonActive ? (
                    <button 
                        className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                        onClick={onClick}
                        type={type}
                    >
                        <p>
                        {children}
                        </p>
                    </button>
                ) : (
                    <button 
                        className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                        onClick={onClick}
                        type={type}
                    >
                        <a href={goToLink} target={buttonTarget} rel="noreferrer">
                        {children}
                        </a>
                    </button>
                )
                }
        </div>
    )
}