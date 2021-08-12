import React from 'react'
import styled from 'styled-components'

export const LoadingBoxes = () => {
    return (
        <div>
            <LoadingContainer>
                <LoadingBox boxDelay={'50ms'} boxColor={'#2e2e2e'} secondColor={'red'}/>
                <LoadingBox boxDelay={'100ms'} boxColor={'#2e2e2e'} secondColor={'green'}/>
                <LoadingBox boxDelay={'150ms'} boxColor={'#2e2e2e'} secondColor={'blue'}/>
                <LoadingBox boxDelay={'200ms'} boxColor={'#2e2e2e'} secondColor={'purple'}/>
                <LoadingBox boxDelay={'250ms'} boxColor={'#2e2e2e'} secondColor={'orange'}/>
                <LoadingBox boxDelay={'300ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                {/* <LoadingBox boxDelay={'350ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'400ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'450ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'500ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'550ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'600ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'650ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'700ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'750ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'800ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'850ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/>
                <LoadingBox boxDelay={'900ms'} boxColor={'#2e2e2e'} secondColor={'yellow'}/> */}
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
            transform: scale(1.6, 1.6) translateY(-3em); 
            background-color: ${props => props.secondColor};
        }
        100% { 
        }
    }
`