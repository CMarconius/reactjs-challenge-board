import React, { useEffect, useState, useRef } from 'react'
import './styles/Card.css'
import CloseIcon from './CloseIcon';

function Card(props) {
    const node = useRef();

    const [open, setOpen] = useState("notOpen");


    const [heroImage, setHeroImage] = useState(<img src="../images/card-default-img.png" alt="" />);
    const [containerContent, setContainerContent] = useState(<>
        <h2>{props.challengeName}</h2>
        <p className="expand">Click to Expand</p>
        </>);

    function handleCloseButtonClick() {
        setOpen("notOpen");
        setContainerContent(
            <>
            <h2>{props.challengeName}</h2>
            <p className="expand">Click to Expand</p>
            </>
        );
        setHeroImage(<img src="../images/card-default-img.png" alt="" />);
        document.removeEventListener('keydown', onkeydown);
    }

    const handleButtonClick = (e) => {
        if (open === "notOpen") {
            
            setContainerContent(
                <>
                    <div className="cardHeader">
                        <div><h2>{props.challengeName}</h2></div>
                        <button onClick={handleCloseButtonClick}>
                            <CloseIcon/>
                        </button>
                    </div>
                    {props.thisChallenge}
                </>
            );
            setHeroImage("");
            if (open === "notOpen") {
                window.scrollTo(0, 0);
            }
            
            setOpen("open");
            return;
        }
        else if (node.current.contains(e.target) !== true) {
            setOpen("notOpen");
            setContainerContent(
                <>
                <h2>{props.challengeName}</h2>
                <h3>THIS IS TEXT, YO!!</h3>
                <h2>{props.challengeName}</h2>
                <p className="expand">Click to Expand</p>
                </>
            );
            setHeroImage(<img src="../images/card-default-img.png" alt="" />);
            return;
        }
        else return;
    }



    return (
        
        <div onClick={handleButtonClick} className={"card " + props.size + " " + open} ref={node}>
            {heroImage}
            
            <div className="innerCardContainer">
                {containerContent}
            </div>
        </div>
    )
}

export default Card
