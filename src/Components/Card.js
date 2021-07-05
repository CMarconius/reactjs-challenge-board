import React, { useEffect, useState, useRef } from 'react'
import './styles/Card.css'

function Card(props) {
    const node = useRef();

    const [open, setOpen] = useState(" notOpen");


    const [heroImage, setHeroImage] = useState(<img src="../images/card-default-img.png" alt="" />);
    const [containerContent, setContainerContent] = useState(<h2>{props.challengeName}</h2>);


    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            setOpen(" open");
            setContainerContent(
                <div className="challengeContainer">
                    <h2>{props.challengeName}</h2>

                    {props.thisChallenge}
                </div>
            );
            setHeroImage("");
            return;
        }
        else {
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
    }


    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    return (
        
        <div onClick={handleClick} className={"card " + props.size + open} ref={node}>
            
            {heroImage}
            
            <div className="innerCardContainer">
                {containerContent}
            </div>
        </div>
    )
}

export default Card
