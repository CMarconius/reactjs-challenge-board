import React from 'react';
import './styles/Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--primary btn-nav']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, linkTo, onClick, buttonStyle, buttonSize, goHere}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const goToLink =  goHere ? goHere : 'https://twitter.com/CMarconius';

    return (
        <div to={linkTo} className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={onClick}
                type={type}
            >
                <a href={goToLink} target="_blank">
                  {children}
                </a>
            </button>
        </div>
    )
}