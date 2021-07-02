import React, { useState } from 'react'
import { Button } from '../Button';

function SortBubble() {

    const [randomArray, setRandomArray] = useState([1,5,2,7,22,15,"ff"]);
    const [sortedArray, setSortedArray] = useState([]);

    const randomizeArray = () => {
        const newArray = [];
        for (var i = 0; i < 9; i++) {
            newArray.push(Math.floor(Math.random() * 100));
        }
        setRandomArray(newArray);
    }

    const sortArray = () => {
        const sortingArray = randomArray;
        sortingArray.sort();
        setSortedArray(sortingArray);
    }


    return (
        <>
            <div>
                <Button onClick={randomizeArray} buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">Click to randomize array</Button>

                <div>Current Array:{"\n"}{randomArray.toString()}</div>
                
                <Button onClick={sortArray} buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">Sort Array</Button>
                <div>New Array:{"\n"}{sortedArray.toString()}</div>
            </div>
        </>
    )
}

export default SortBubble
