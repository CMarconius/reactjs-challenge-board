import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import styled from 'styled-components'

import chevron from "./images/chevron.png"
import recipeData from "./recipes.json"

const TheLastCookBook = () => {
    const [cookBookState, setCookBookState] = useState("")

    const [myIngredients, setMyIngredients] = useState(["Flour", "Beans"])
    const [currentIngredient, setCurrentIngredient] = useState("")

    const [savedRecipes, setSavedRecipes] = useState(recipeData)

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

                    <input list="items"/>

                    <datalist id="items">
                        <option value="Saved Recipes"/>
                        <option value="Vegan Recipes"/>
                        <option value="Add New Recipe"/>
                    </datalist>
                </BookModeSelector>

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


                <RecipeSection>
                        {savedRecipes.map((recipe) => {
                            return (
                                <>
                                    <RecipePreviewBox>
                                        <RecipePreviewImage>
                                            <img src={recipe["ImageURL"]}/>
                                        </RecipePreviewImage>
                                        <RecipePreviewBar>
                                            <h1>{recipe["Recipe Name"]}</h1>
                                            
                                            <img src={chevron}/>
                                        </RecipePreviewBar>
                                    </RecipePreviewBox>
                                </>
                            )
                        })}
                </RecipeSection>

            </CookBookContainer>

        </CookBook>
        </>
    )
}

export default TheLastCookBook

const CookBook = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const BookModeSelector = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    max-height: 40px;
    min-height: 40px;
    width: 200px;
    max-width: 400px;
    min-width: 60%;
    background-color: var(--tlcb-3);
    border: solid 3.5px var(--tlcb-5);
    font-size: 15px;
    text-align: left;
    padding-left: 10px;
    display: flex;
    align-items: center;
`

const MyListOfIngredients = styled.div`
    max-width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 10px 30px 10px;
    border-radius: 15px;
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

const RecipeSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const RecipePreviewBox = styled.div`
    width: 120px;
    height: fit-content;
    max-width: 35vw;
    max-height: fit-content;
    border: solid 5px var(--tlcb-5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
`

const RecipePreviewImage = styled.div`
    height: 120px;
    width: 120px;
    max-width: 35vw;
    max-height: 35vw;
    img {
        height: 120px;
        width: 120px;
    max-width: 35vw;
    max-height: 35vw;
        object-fit: cover;
    }
`

const RecipePreviewBar = styled.div`
    width: 120px;
    max-width: 35vw;
    height: 40px;
    min-height: fit-content;
    background-color: var(--tlcb-3);
    display: flex;
    justify-content: space-between;
    h1 {
        font-size: 10px;
        margin: 0px;
        font-weight: 200;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: left;
        padding-left: 5px;
        padding-right: 0px;
    }
    img {
        height: 100%;
        width: 20%;
    }
    border-top: solid 4px var(--tlcb-5);
`