import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import styled from 'styled-components'

import chevron from "./images/chevron.png"
import recipeData from "./recipes.json"

const TheLastCookBook = () => {
    const [cookBookState, setCookBookState] = useState("")
    const [expandedRecipe, setExpandedRecipe] = useState("")

    const [myIngredients, setMyIngredients] = useState([])
    const [currentIngredient, setCurrentIngredient] = useState("")

    const [savedRecipes, setSavedRecipes] = useState(recipeData)
    const images = require.context('../../../../public/images/TheLastCookBook', true);

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

    const RemoveIngredient = (ingredient) => {
        let tempArray = [...myIngredients]
        var index = tempArray.indexOf(ingredient)
        if (index !== -1) {
            tempArray.splice(index, 1);
            setMyIngredients([...tempArray])
        }
    }

    const ExpandRecipe = (recipe) => {
        setExpandedRecipe(recipe)
    }

    useEffect(() => {
    }, [myIngredients]);


    return (
        <>
        <CookBook>
            <CookBookNavBar>
                <h1>THE LAST COOKBOOK</h1>
                {/* <HamburgerBox>
                    <HamburgerLine/>
                    <HamburgerLine/>
                    <HamburgerLine/>
                </HamburgerBox> */}
            </CookBookNavBar>

            <CookBookContainer>

                {(expandedRecipe) ? (
                    <>
                    <ExpandedRecipeContainer>

                        <ExpandedRecipe recipe={expandedRecipe}>
                            
                            <ExpandedRecipeButton>
                                <Button buttonSize={"btn--small"}  buttonActive={true} onClick={()=>setExpandedRecipe("")}>↩ Back</Button>
                            </ExpandedRecipeButton>
                            

                            <ExpandedRecipeInner>
                                <img className="RecipeSeparator" src={images(expandedRecipe["ImageURL"]).default}/>
                                <h2>{expandedRecipe["Recipe Name"]}</h2>
                                <h3>Description:</h3>
                                <p className="RecipeSeparator">
                                    {expandedRecipe["Description"]}
                                </p>
                                <p className="RecipeSeparator">
                                    {expandedRecipe["Serves"]}
                                </p>
                                <h3>Ingredients:</h3>
                                <p className="RecipeSeparator">
                                    {expandedRecipe["Ingredients"].map((ing)=>{
                                        return(<li>{ing}</li>)
                                    })}
                                </p>
                                <h3>Instructions:</h3>
                                <p className="RecipeSeparator">
                                    {expandedRecipe["Instructions"].map((step)=>{
                                        return(<li>{step}</li>)
                                    })}
                                </p>
                            </ExpandedRecipeInner>
                        </ExpandedRecipe>

                    </ExpandedRecipeContainer>
                    </>
                ) : (
                    <>
                

                    {(cookBookState==="addIngredient") ? ( 
                        <>
                            <FilterSection>
                                <MyListOfIngredients>
                                    <>
                                        <CloseWindow><h2 onClick={() => setCookBookState("")}>Close</h2></CloseWindow>
                                        <h2>MY INGREDIENTS:</h2>
                                        
                                        {myIngredients.map(ingredient => {
                                            return <Ingredient onClick={()=>RemoveIngredient(ingredient)}>{ingredient}</Ingredient>
                                        })}

                                        <input onChange={handleIngredientChange} type="text" placeholder="Add an ingredient..." value={currentIngredient}/>
                                        <Button buttonSize={"btn--small"}  buttonActive={true} onClick={AddIngredient}>ADD NEW INGREDIENT</Button>
                                        {myIngredients.length ? <h5>CLICK INGREDIENT TO <br></br>REMOVE FROM FILTER</h5>:null}
                                        

                                    </>
                                </MyListOfIngredients>
                                
                                <h2>FILTERED RECIPES</h2>

                            </FilterSection>
                        </>
                    ) : (
                        (cookBookState==="addRecipe") ? ( 
                            <>
                            <h2>Add New Recipe</h2>
                            </>
                        ) : (
                            <>
                                <Button buttonSize={"btn--small"}  buttonActive={true} onClick={() => setCookBookState("addIngredient")}>Filter Recipes by Ingredients <i class="fa fa-filter"></i></Button>
                                <Button buttonSize={"btn--small"}  buttonActive={true} onClick={() => setCookBookState("addRecipe")}>Add New Recipe <i class="fa fa-plus"></i></Button>
                                <h2>Select Recipe</h2>
                            </>
                        )
                        )
                    }

                    <RecipeSection>
                            {savedRecipes.map((recipe) => {
                                let displayed = true;
                                let currentIngredients = recipe.Ingredients;
                                
                                for(let i=0;i<myIngredients.length;i++) {
                                    let found = false;
                                    currentIngredients.forEach((x)=>{
                                        if (x.toLowerCase().includes(myIngredients[i].toLowerCase())){
                                            found=true;
                                        }
                                    })
                                    if(!found) {
                                        displayed = false;
                                    }
                                }
                                
                                if (myIngredients.length === 0 || displayed === true || cookBookState==="") {
                                    return (
                                        <>
                                            <RecipePreviewBox onClick={()=>ExpandRecipe(recipe)}>
                                                <RecipePreviewImage>
                                                    <img src={images(recipe["ImageURL"]).default}/>
                                                </RecipePreviewImage>
                                                <RecipePreviewBar>
                                                    <h1>{recipe["Recipe Name"]}</h1>
                                                    
                                                    <img src={chevron}/>
                                                </RecipePreviewBar>
                                            </RecipePreviewBox>
                                        </>
                                    )
                                }
                            })}
                    </RecipeSection>
                    </>
                )}
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
        transform: rotate(90deg);
        transition: 0.4s;
        cursor: pointer;
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
    i {
        font-size: 20px;
    }
    h2 {
        margin-bottom: 20px;
        font-size: 20px;
    }
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
    padding: 1px 4px;
    display: flex;
    align-items: center;
    padding-left: auto;
    padding-right: auto;
    input {
        width: 100%;
        background-color: rgba(170, 170, 170, 0.5);
        color: white;
        font-weight: bold;
        font-size: 15px;
    }
`

const FilterSection = styled.div`
    padding-top: 20px;
    h2 {
        font-size: 20px;
    }
`

const MyListOfIngredients = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    margin-left: auto;
    margin-right: auto;
    margin: 0px auto 20px auto;
    padding: 10px 10px 8px 10px;
    border-radius: 0px;
    border: solid 2px  var(--tlcb-5);
    background-color: var(--tlcb-3);
    h2 {
        border-bottom: solid 2px var(--tlcb-2);
        margin-bottom: 10px;
        font-size: 16px;
    }
    h5 {
        line-height: 15px;
        font-size: 9px;
        color: var(--mediumblu);
    }
    input {
        margin-top: 20px;
    }
    Button {
        font-size: 10px;
        margin-bottom: 5px;
    }
`

const Ingredient = styled.li`
    font-weight: 700;
    border-bottom: solid 1px var(--tlcb-2);
    width: 60%;
    margin-bottom: 5px;
    color: var(--cmarc-blue-3);
    :hover {
        text-decoration: line-through;
        color: #9e2a2bff;
        cursor: pointer;
    }
`

const RecipeSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    padding-bottom: 80px;
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
    :hover {
        transform: scale(1.05);
        box-shadow: 0 0 6px 1px var(--cmarc-blue-2);
    }
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
    min-height: fit-content;
    background-color: var(--tlcb-3);
    display: flex;
    justify-content: space-between;
    border-top: solid 4px var(--tlcb-5);
    align-items: center;
    h1 {
        font-size: 10px;
        margin: 0px;
        font-weight: 200;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: left;
        padding-left: 5px;
        padding-right: 0px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    img {
        width: 20%;
    }
`
const CloseWindow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0px;
    margin: 0px;
    h2 {
        font-size: 10px;
        text-decoration: none;
        margin: 0px;
        padding: 0px 5px;
        border: solid 1px white;
        border-radius: 10px;
        font-weight: normal;
        background-color: var(--cmarc-blue-1);
        color: white;
        :hover {
            cursor: pointer;
            background-color: white;
            color: var(--cmarc-blue-3);
        }
    }
`

const ExpandedRecipeContainer = styled.div`

    margin: 30px;
    max-width: 100%;
    background-color: var(--cmarc-blue-3);
    .RecipeSeparator {
        margin-bottom: 20px;
    }
    text-align: left;
    background-color: var(--cmarc-blue-1);
    Button {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    margin-bottom: 80px;
    @media (max-width: 524px) {
        margin: 0px;
    }
    @media (min-width: 524px) {
        border: solid 3px var(--tlcb-5);
    }
`

const ExpandedRecipeButton = styled.div`
    background: rgba(76, 175, 80, 0);
    width: 100%;
    Button {
        margin-left: 20px;
    }
    padding-top: 10px;
    padding-bottom: 10px;
`

const ExpandedRecipe = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0px;
    img, h2, h3 {
        width: calc(100% - 4px);
        margin-bottom: 10px;
        border: solid 2px var(--tlcb-5);
    }
    h2 {
        padding: 15px 0px;
    }
    h2,h3 {
        text-align: center;
        margin-top: 0;
        background-color: white;
        color: var(--cmarc-blue-3);
    }
    h3 {
        width: 50%;
    }
`

const ExpandedRecipeInner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px 20px 20px;
    h3 {
        margin-left: auto;
        margin-right: auto;
    }
`
