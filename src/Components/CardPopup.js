import React from 'react'
import './styles/CardPopup.css'
import CloseIcon from './CloseIcon';

const CardPopup = (props) => {
    const popupContent = (props.popupContent ? props.popupContent : "");
    const backgroundColor = (props.backColor ? props.backColor : "grey");
    const challengeName = (props.challengeName ? props.challengeName : "default");
    const popupSize = (props.size ? props.size : "medium");

    function handleCloseButtonClick() {
        props.togglePopup();
    }

    return (
        <>
            <div className={"popup"}>
                <div className={"popupContainer " + popupSize}>
                        
                    <div className="cardHeader">
                        <div><h2>{props.challengeName}</h2></div>
                        <button onClick={handleCloseButtonClick}>
                            <CloseIcon/>
                        </button>
                    </div>
                    <div className="popupContent">
                        
                        {props.description ? <h3 className="challengeDescription">{props.description}</h3> : null}


                        {popupContent}
                    </div>
                </div>
            </div>  
        </>
    )
}

export default CardPopup