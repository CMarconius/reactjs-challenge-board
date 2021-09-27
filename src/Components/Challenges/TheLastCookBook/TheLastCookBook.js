import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import styled from 'styled-components'

const TheLastCookBook = () => {
    const [myIngredients, setMyIngredients] = useState(["flour", "beans"])
    const [currentIngredient, setCurrentIngredient] = useState("")

    const handleIngredientChange = (e) => {
        setCurrentIngredient(e.target.value)
    }

    const AddIngredient = () => {
        setMyIngredients([...myIngredients, currentIngredient]);
        setCurrentIngredient("")
    }

    useEffect(() => {
    }, [myIngredients]);


    return (
        <>
        <CookBook>
            <h1>The Last Cookbook You Will Ever Need</h1>
            <input onChange={handleIngredientChange} type="text" placeholder="Add an ingredient..." value={currentIngredient}/>
            <Button buttonSize={"btn--small"}  buttonActive={true} onClick={AddIngredient}>Add New Ingredient</Button>
            <MyListOfIngredients>
                <h2>Here's my List of Ingredients:</h2>
                {myIngredients.map(ingredient => {
                    return <h3>{ingredient}</h3>
                })}
            </MyListOfIngredients>
        </CookBook>
        </>
    )
}

export default TheLastCookBook

const CookBook = styled.div`
    max-width: 100%;
    background-color: #c2c2c2;
    margin: 15px;
    padding: 15px;  
    border-radius: 20px;
    border: solid 2px var(--cmarc-blue-1);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MyListOfIngredients = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 10px;
    border-radius: 20px;
    background-color: var(--cmarc-blue-3);
    h2 {
        border-bottom: solid 1px white;
        margin-bottom: 10px;
    }
    h3 {
        font-weight: 100;
    }
    
`