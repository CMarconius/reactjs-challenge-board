import React, { useEffect, useState, useRef } from 'react'
import './styles/Card.css'

function Card(props) {
    const node = useRef();

    const [open, setOpen] = useState(" notOpen");


    const [heroImage, setHeroImage] = useState(<img src="../images/card-default-img.png" alt="" />);
    const [containerContent, setContainerContent] = useState(<>
        <h2>{props.challengeName}</h2>
        <p className="expand">Click to Expand</p>
        </>);


    const handleButtonClick = (e) => {
        if (node.current.contains(e.target) && open === " notOpen") {
            setOpen(" open");
            setContainerContent(
                <div className="challengeContainer">
                    <h2>{props.challengeName}</h2>

                    {props.thisChallenge}
                </div>
            );
            setHeroImage("");
            window.scrollTo(0, 0);
            return;
        }
        else if (node.current.contains(e.target) !== true) {
            setOpen(" notOpen");
            setContainerContent(
                <>
                <h2>{props.challengeName}</h2>
                <p className="expand">Click to Expand</p>
                </>
            );
            setHeroImage(<img src="../images/card-default-img.png" alt="" />);
            return;
        }
        else return;
    }


    useEffect(() => {
        document.addEventListener("mousedown", handleButtonClick);
    
        return () => {
          document.removeEventListener("mousedown", handleButtonClick);
        };
      }, []);

    return (
        
        <div onClick={handleButtonClick} className={"card " + props.size + open} ref={node}>
            
            {heroImage}
            
            <div className="innerCardContainer">
                {containerContent}
            </div>
        </div>
    )
}

export default Card
