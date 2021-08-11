import React from 'react'
import styled from 'styled-components'

export const LoadingBoxes = () => {
    return (
        <>
            <LoadingContainer>
                <LoadingBox boxColor={'red'}/>
                <LoadingBox boxColor={'green'}/>
                <LoadingBox boxColor={'blue'}/>
                <LoadingBox boxColor={'purple'}/>
                <LoadingBox boxColor={'orange'}/>
                <LoadingBox boxColor={'yellow'}/>
            </LoadingContainer>
        </>
    )
}

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
    align-items: flex-end;
`


const LoadingBox = styled.div`
    width: 20px;
    height: 20px;
    margin: 10px;
    background-color: ${props => props.boxColor};
`