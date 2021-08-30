import React,  { useState } from 'react'
import { Button } from '../../Button';
import './VowelCount.css'

const VowelCount = () => {

    const [inputText, setInputText] = useState("");
    const [vowelCount, setVowelCount] = useState(0);
    const vowels = "aeiouAEIOU";

    function onChangeText(e) {
        setInputText(e.target.value);
    }
    
    const countVowels = () => {
        let num = 0;

        for (let i = 0; i < inputText.length; i++) {
            if (vowels.includes(inputText[i])) {
                num++;
            }
        }
        setVowelCount(num);
    }


    return (
        <div className={"vowelCounter"}>

            <input type="text" className="vowelCountInput" value={inputText} onChange={onChangeText}></input>

            <Button onClick={countVowels} buttonSize="btn--small" buttonActive="false" goHere="" bTarget="">
                Count Vowels
            </Button>

            {vowelCount > 0 ? <h3>Number of Vowels: {vowelCount}</h3> : <h3>There are no vowels</h3>}
            
        </div>
    )
}

export default VowelCount
