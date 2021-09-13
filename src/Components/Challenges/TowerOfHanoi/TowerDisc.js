import React from 'react'
import styled from 'styled-components'

const TowerDisc = () => {
    return (
        <>
            <Disc/>
        </>
    )
}


const Disc = styled.div`
    width: 90px;
    height: 15px;
    z-index: 2;
    border-radius: 5px;
    border: 1px solid rgb(83, 83, 83);
    background-color: var(--cmarc-blue-2);
    &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 0 5px 1px white;
        transition: 200ms;
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
