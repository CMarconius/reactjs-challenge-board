import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import styled from 'styled-components'

const TheLastCookBook = () => {
    const [cookBookState, setCookBookState] = useState("")

    const [myIngredients, setMyIngredients] = useState(["Flour", "Beans"])
    const [currentIngredient, setCurrentIngredient] = useState("")

    const [savedRecipes, setSavedRecipes] = useState([
        {
            "Recipe Name" : "Easy Indian Biryani-Style Dinner",
            "Description" : "This is our take on the famous Indian feast food. Biryani is typically baked in the oven for a few hours, however, ours is a simpler one-pot wonder, where the rice is cooked in coconut milk with lots of spices and seeds. It’s a lovely, wholesome dinner and we have included a simple mint raita yogurt dip to serve with it. This is lovely served with toasted (gluten-free) pittas, a spoonful of pickle (if you have any), and the mint raita. To make an easy veg stock mix 5 tablespoons of gluten free miso paste with 2 litres of boiling water.",
            "Serves" : "Serves 2| Takes 1 hour to make | Max low FODMAP portion size: 1 portion or half this recipe.",
            "Ingredients": [
                "2 medium tomatoes (approx 200g)",
                "1 leek - the greens only (100g)",
                "1-2 medium carrots, (150g max)",
                "8g (½ thumb size) fresh ginger",
                "1 small fresh chilli",
                "1 tbsp oil",
                "1 tsp salt",
                "1 tbsp cumin seeds",
                "¾ tsp turmeric powder",
                "1 tsp curry powder",
                "¼ tsp ground cardamom",
                "¼ tsp ground cinnamon",
                "1 bay leaf",
                "180ml of 1 tin of coconut milk",
                "200g frozen edamame beans or green beans",
                "180g brown basmati rice",
                "650ml veg stock (garlic and onion free)",
                "25g currants",
                "100g of 1 tin of butter beans",
                "seeds from ½ pomegranate (125g in total)",
                "small bunch fresh coriander",
                "10g mint (small bunch)",
                "125ml coconut yoghurt of your choice",
                "1 tbsp maple syrup",
                "juice of ½ lime",
            ],
            "Instructions": [
                "Finely chop the tomato and the green top of the leek into rounds, rinsing the leek greens to remove any sediment. . Peel and grate the ginger. Finely chop the red chilli - removing the seeds if you prefer less heat. Finely slice the carrots into rounds. Put the frozen edamame beans in a bowl with warm water and leave to thaw. If you are using green beans instead, finely chop them.",
                "Put 1 tablespoons of oil in a large pot on high heat until it gets hot and then reduce to a medium heat. Add the sliced leek, tomato, chopped chilli, grated ginger together with the cumin seeds and ½ tsp of salt, stir occasionally. Cook for 3-5 minutes.",
                "Add the turmeric, curry powder, cardamom, cinnamon and bay leaves and stir it through for a minute. Now add the coconut milk and mix it right through and cook for a further 3 minutes",
                "Add the rice, veg stock, carrots, currants and remaining ½ tsp of salt into the pot, put the lid on, bring to the boil and then reduce to a simmer. Leave the lid slightly ajar, to allow steam to evaporate and cook, until just about all the liquid has evaporated from the bottom of the pot.",
                "Rinse the butter beans well and add into the pot along with edamame/green beans and heat for further 3 minutes. Taste and season with a pinch of salt and pepper to your liking, if needed.",
                "For the mint raita, finely chop the mint. In bowl, mix all the ingredients for raita together.",
                "Once your dish is ready, roughly chop the fresh coriander and serve with a sprinkling of pomegranate seeds on top of each bowl. Serve the raita on the side.",
            ],
            "ImageURL" : "https://cdn.pixabay.com/photo/2021/09/25/18/54/dish-6655595_960_720.jpg",
        },
        {
            "Recipe Name" : "Irish Root Vegetable Soup",
            "Description" : "This is a smooth, sweet, and substantial soup. The white wine, rosemary and parsnip really add flavour and body to it too. To make an easy veg stock mix 5 tablespoons of gluten free miso paste with 2 litres of boiling water",
            "Serves" : "Serves 4 people | Takes approx 50 minutes to make | Max low FODMAP serving size: 1 portion or ¼ of this recipe.",
            "Ingredients" : [
                "1 Tbsp oil",
                "green tops of 2 small leeks or 1 large - 165g (use none of the white part as these are high FODMAP)",
                "225g celeriac",
                "2 carrots 325g",
                "1.5 tsp salt",
                "1/4 tsp black pepper",
                "1 parsnips 250g",
                "1 potatoes 200g",
                "2 sprigs of rosemary",
                "1 bay leaves",
                "2.5 tbsp white wine",
                "1.75 litres of veg stock/water (garlic/onion free)",
                "juice of half a lemon"
            ],
            "Instructions" : [
                "Finely chop the leek greens, celeriac, carrots, potato and theparsnips.",
                "Add 1 tablespoons oil to family sized pot (4 litres) and put on a medium heat.",
                "Add the leek greens, carrot, celeriac, potatoes, parsnips and the salt, black pepper and stir. Cover with a lid and sweat for 15 minutes, until greens are soft, stirring occasionally. If the veg starts to stick add 2 tablespoons of water",
                "Add the the leaves from the sprigs of rosemary, the bay leaves and the white wine to the pot, and cook for 5 minutes, stirring a few times to prevent the veg sticking to bottom of the pot.",
                "Add veg stock/water and lemon juice, turn the heat up high and bring to the boil, then turn the heat down, cover with a lid and simmer for 15 minutes, stirring occasionally to avoid things sticking to the bottom of the pot.",
                "Remove the pot from the heat, remove the bay leaf and blend the mixture until smooth, using a stick blender. If the soup seems a little thick, add a little of water until it reaches your desired consistency.",
                "Season with salt and pepper to taste, and enjoy!"
            ],
            "ImageURL" : "https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254_960_720.jpg",
        }
    ])

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
                    <h3>Viewing Recipes</h3>
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
`
const RecipePreviewBox = styled.div`
    width: 120px;
    height: 120px;
    max-width: 35vw;
    max-height: 35vw;
    border: solid 5px var(--tlcb-5);
`

const RecipePreviewImage = styled.div`
    img {
        width: 100%;
        min-width: 100%;
        height: 100%;
    }
`

const RecipePreviewBar = styled.div`
    width: 120px;
    max-width: 35vw;
`