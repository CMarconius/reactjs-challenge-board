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
        if (ingr !== "") {
            ingr = ingr.charAt(0).toUpperCase() + ingr.slice(1)
            if (!myIngredients.includes(ingr)) {
                setMyIngredients([...myIngredients, ingr]);
                setCurrentIngredient("")
            }
        }
    }

    useEffect(() => {
    }, [myIngredients]);


    return (
        <>
        <CookBook>
            <CookBookNavBar>
                <h1>THE LAST COOKBOOK</h1>
                <HamburgerBox><HamburgerLine/><HamburgerLine/><HamburgerLine/></HamburgerBox>
            </CookBookNavBar>

            <CookBookContainer>
                <BookModeSelector>
                    Viewing Recipes
                </BookModeSelector>

                {/* {(cookBookState==="addIngredient") ? ( 
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
                } */}

            </CookBookContainer>

        </CookBook>
        </>
    )
}

export default TheLastCookBook

const CookBook = styled.div`
font-family: 'Cinzel', serif;
    max-width: 100%;
    min-width: 100%;
    background-color: #335c67ff;
    color: white;  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:5px;
    input {
        box-shadow: 0px 0px 4px #888888;
    }
`

const CookBookNavBar = styled.div`
    background-color: var(--tlcb-3);
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: space-around;
    h1 {
        font-size: 15px;
    }
`

const HamburgerBox = styled.div`
    width: 30px;
    height: 40px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :hover  {
        transform: scale(1.1);
    }
`
const HamburgerLine = styled.div`
    background-color: var(--tlcb-5);
    min-height: 7px;
    width: 100%;
    margin-top: 1px;
    margin-bottom: 1px;
`
const CookBookContainer = styled.div`
    min-height: 100vh;
`

const BookModeSelector = styled.div`
    margin-top: 20px;
    max-height: 40px;
    min-height: 40px;
    width: 200px;
    max-width: 400px;
    min-width: 60%;
    background-color: var(--tlcb-3);
    border: solid 3.5px var(--tlcb-5);
    font-size: 16px;
    text-align: left;
    padding-left: 10px;
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