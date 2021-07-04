import React, { useState } from 'react'
import { Button } from '../Button';

function SortBubble() {

    const [randomArray, setRandomArray] = useState([4,22,1,2,5,6,3,74,11]);
    const [sortedArray, setSortedArray] = useState([]);

    const randomizeArray = () => {
        const newArray = [];
        for (var i = 0; i < 9; i++) {
            newArray.push(Math.floor(Math.random() * 100));
        }
        setRandomArray(newArray);
        setSortedArray('...');
    }

    const sortArray = () => {
        let sortingArray = [...randomArray];
        
        for (let k = sortingArray.length; k > 2; k--) {
            for (let i = 0; i < (sortingArray.length - 1); i++) {
                if (sortingArray[i] > sortingArray[(i+1)]) {
                    let temp = sortingArray[i];
                    sortingArray[i] = sortingArray[i+1];
                    sortingArray[i+1] = temp;
                }
            }
        }
        
        setSortedArray(sortingArray);
    }


    return (
        <>
            <div>
                
                <Button onClick={randomizeArray} buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">Click to randomize array</Button>

                <div>Current Array:{"\n"}{randomArray.toString()}</div>
                
                <Button onClick={sortArray} buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">Sort Array</Button>
                <div>Sorted Array:{"\n"}{sortedArray.toString()}</div>
            </div>
        </>
    )
}

export default SortBubble
