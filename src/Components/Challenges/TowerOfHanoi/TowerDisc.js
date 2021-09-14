import React from 'react'
import styled from 'styled-components'

const TowerDisc = (props) => {
    return (
        <>
            <Disc className={props.discClass}/>
        </>
    )
}


const Disc = styled.div`
    width: 90px;
    height: 15px;
    z-index: 2;
    border-radius: 8px;
    border: 1px solid rgb(83, 83, 83);
    background-color: var(--cmarc-blue-2);
    &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 0 5px 1px white;
        transition: 200ms;
    }

    &.size0 {
        background-color: var(--cmarc-blue-2);
        width: 30px;
    }

    &.size1 {
        background-color: #c4e941;
        width: 50px;
    }

    &.size2 {
        background-color: #4337b7;
        width: 70px;
    }

    &.size3 {
        background-color: #cf567a;
        width: 90px;
    }
`
  
//   .disc1 {
//     background-color: var(--cmarc-blue-2);
//     width: 30px;
//   }
//   .disc2 {
//     background-color: #c4e941;
//     width: 50px;
//   }
//   .disc3 {
//     background-color: #4337b7;
//     width: 70px;
//   }
//   .disc4 {
//     background-color: #cf567a;
//     width: 90px;
//   }




export default TowerDisc
