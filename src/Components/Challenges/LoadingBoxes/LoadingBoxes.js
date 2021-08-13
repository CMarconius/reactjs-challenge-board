import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

export const LoadingBoxes = (props) => {

    var timeGap;
    var boxCount;
    var colorful;

    // SETTING DEFAULT VALUES
    timeGap = props.timeGap || 90;
    boxCount = props.boxCount || 6;
    colorful = props.colorful || false;

    const [boxes, setBoxes] = useState(() => {
        if (colorful) {
            let arr = [];
            for (let i = 0; i < boxCount; i++) {
                arr.push(<LoadingBox boxDelay={'' + (timeGap * i) + 'ms'} boxColor={'#' + Math.floor(Math.random()*16777215).toString(16)} secondColor={'#' + Math.floor(Math.random()*16777215).toString(16)}/>)
            }
            return arr;
        }
        else {
            let arr = [];
            for (let i = 0; i < boxCount; i++) {
                arr.push(<LoadingBox boxDelay={'' + (timeGap * i) + 'ms'} boxColor={'#FFFF00'} secondColor={'#2e2e2e'}/>)
            }
            return arr;
        }
    })



    return (
        <div>
            <LoadingContainer>
                {boxes.map((box) => {
                        return box;
                    }
                )}
            </LoadingContainer>
        </div>
    )
}

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 6em;
    align-items: flex-end;
    /* background-color: #8080804b; */
    border-radius: 50%;
    padding: 1.5em;
    /* margin-top: 5em; */
`


const LoadingBox = styled.div`
    width: 0.4em;
    height: 0.4em;
    margin: 0.3em;
    border-radius: 50%;
    position: relative !important;
    background-color: ${props => props.secondColor};
    animation: bounce 1s infinite;
    animation-delay: ${props => props.boxDelay};
    transition-timing-function: ease-in-out;

    @keyframes bounce {
        0% { 
        }
        50% { 
            transform: scale(1.6, 1.6) translateY(-2.5em); 
            background-color: ${props => props.boxColor};
        }
        100% { 
        }
    }
`