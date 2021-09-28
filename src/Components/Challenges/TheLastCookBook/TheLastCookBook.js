import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import styled from 'styled-components'

const TheLastCookBook = () => {
    const [cookBookState, setCookBookState] = useState("d")

    const [myIngredients, setMyIngredients] = useState(["Flour", "Beans"])
    const [currentIngredient, setCurrentIngredient] = useState("")

    const handleIngredientChange = (e) => {
        setCurrentIngredient(e.target.value)
    }

    const AddIngredient = () => {
        let ingr = currentIngredient.toLowerCase()
        ingr = ingr.charAt(0).toUpperCase() + ingr.slice(1)
        if (!myIngredients.includes(ingr)) {
            setMyIngredients([...myIngredients, ingr]);
            setCurrentIngredient("")
        }
    }

    useEffect(() => {
    }, [myIngredients]);


    return (
        <>
        <CookBook>
            <h1>The Last Cookbook You Will Ever Need</h1>

            {(cookBookState==="addIngredient") ? ( 
                <>
                    <input onChange={handleIngredientChange} type="text" placeholder="Add an ingredient..." value={currentIngredient}/>
                    <Button buttonSize={"btn--small"}  buttonActive={true} onClick={AddIngredient}>Add New Ingredient</Button>
                    <MyListOfIngredients>
                        <h2>Here's my List of Ingredients:</h2>
                        {myIngredients.map(ingredient => {
                            return <Ingredient>{ingredient}</Ingredient>
                        })}
                    </MyListOfIngredients>
                </>
            ) : (
                <>
                    <h2>Select Recipe</h2>
                    <Button buttonSize={"btn--small"}  buttonActive={true} onClick={() => setCookBookState("addIngredient")}>Filter Recipes by Ingredient</Button>
                </>
            )
            }

        </CookBook>
        </>
    )
}

export default TheLastCookBook

const CookBook = styled.div`
    max-width: 100%;
    background-color: #f0f0f0;
    margin: 15px;
    padding: 15px;  
    border-radius: 20px;
    border: solid 2px var(--cmarc-blue-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        box-shadow: 0px 0px 4px #888888;
    }
`

const MyListOfIngredients = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 10px;
    border-radius: 20px;
    border: solid 2px  var(--tlcb-5);
    background-color: var(--tlcb-1);
    h2 {
        border-bottom: solid 1px var(--tlcb-2);
        margin-bottom: 10px;
    }
`

const Ingredient = styled.li`
    font-weight: 700;
    border-bottom: dotted 3px var(--tlcb-2);
    width: 60%;
    margin-bottom: 5px;
`