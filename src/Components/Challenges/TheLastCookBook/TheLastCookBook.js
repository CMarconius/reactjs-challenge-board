import React, { useEffect, useState } from 'react'
import { Button } from '../../Button'
import styled from 'styled-components'

import chevron from "./images/chevron.png"

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
        },
        {
            "Recipe Name" : "Easy Sweet Buckwheat Pancakes",
            "Description" : "Dairy-free, refined sugar-free and gluten-free, these beauties taste super! Dave makes these regularly for his daughters and they love them. Drizzle over some maple syrup, and serve with some berries, a tablespoon of coconut yogurt, and a teaspoon of almond butter for a yummy start to the day. These can also be enjoyed as a snack during the day",
            "Serves" : "Makes 4 pancakes |Takes 20 mins | Low FODMAP serving size is 2 pancakes or half this recipe.",
            "Ingredients" : [
                "200g of buckwheat flour",
                "400ml of almond/rice milk",
                "pinch of salt",
                "⅓ of an unripe banana (an unripe banana is low FODMAP)",
                "2 tbsp maple syrup",
                "1 tsp baking powder",
                "2 tbsp tahini",
                "1 tbsp olive oil "
            ],
            "Instructions" : [
                "Blend all ingredients together in a blender or food processor until everything is smooth (if you have neither, use a fork, mash the banana up very well and then mix everything well in a bowl).",
                "Put a non-stick pan/skillet on a high heat and give it a few minutes to heat up, you want a nice hot pan. Add one teaspoon of oil, move the pan around spreading the oil to cover most ofthe surface. Use a tissue to mop up any extra oil, to minimise extra calories. You just want the tiniest covering of oil so that your pancakes won’t stick to the pan.",
                "Turn the heat down to medium high and pour in enough pancake mixture to have a thin coating on the surface of the pan. Cook for a few minutes until bubbles start to form on the top and the top starts to dry out and not look moist anymore.",
                "Using a silicone spatula, turn the pancake and cook on the other side until golden. Then repeat with the remaining batter.",
                "Serving suggestion: Pour some coconut yogurt (125g max serving size), raspberries (60g max), strawberries (140g max), and maple syrup on top."
            ],
            "ImageURL" : "./images/Easy_Sweet_Buckwheat_Pancakes.png",
        },
        {
            "Recipe Name" : "Quinoa & Flax Pancakes",
            "Description" : "These are powerful pancakes, and really good after any sort of workout or exercise. They are also super-tasty, packed full of protein, complex carbs and good fats, and have the added benefit of being gluten and dairy-free.",
            "Serves" : "Makes 10 small pancakes | Takes 20 minutes to make | Low FODMAP Serving size 5 small pancakes",
            "Ingredients" : [
                "125g quinoa (uncooked)",
                "1 tbsp whole flax seeds",
                "250ml of rice milk",
                "1 tsp vanilla essence",
                "¾ of a medium-sized banana (not too ripe)",
                "2 tbsp maple syrup/agave syrup",
                "a pinch of salt",
                "Dash Olive oil"
            ],
            "Instructions" : [
                "In a high-speed blender or coffee grinder, blend the uncooked quinoa and flax together until it reaches a flour like consistency (they do blend in some regular domestic blenders but not all!).",
                "Add the rest of ingredients and blend together.",
                "Heat a nonstick-frying pan on high heat for 2 mins, until it gets warm.",
                "Turn heat down to medium heat and pour a tiny dash of oil, mix around the pan and wipe away with a kitchen paper to remove any extra oil.",
                "Pour in enough pancake batter to lightly cover the bottom of the pan and spread out evenly in the pan. Allow to cook at medium heat.",
                "Once the edges start to cook and the centre starts to develop holes or bubbles and it dries out, turn the pancake, we find a silicone spatula the best tool for this.",
                "Cook the other side until it gets light brown. Repeat with the remaining batter.",
                "Tip: If the batter starts to get too thick add a little more rice milk to thin it out."
            ],
            "ImageURL" : ".images/Quinoa_And_Flax_Pancakes.png",
        },
        {
            "Recipe Name" : "Perfect Porridge",
            "Description" : "We couldn’t write a breakfast section that didn’t champion one of our favourite foods - porridge! Often we will eat porridge for more than 1 meal a day!! This super nourishing meal is not exclusive to breakfast you know!! It can double up for a lazy, hug like supper too! Some people have very bad associations to porridge; maybe you went to boarding school and were force fed a ‘gruel’ like watery paste and that is your association with porridge. Well if so, put this aside and let's start new! We typically make it with half rice milk, half water, so that it rich, sweet and creamy, while being dairy-free and super-wholesome. There are typically two types of porridge oat flakes available, jumbo which are bigger and don’t break down as well as regular oats, they tend to have a bit more bite to them. Regular or standard oat flakes are the norm and if you don’t know which you have been using, chances are they are standard oat flakes. Pinhead oats are also available but we usually find them a bit more hardcore in that you need to soak them overnight and then they still have a bit too much bite to them. However, saying all that, on this course you will be using gluten-free oat flakes, so it is just like regular oat flakes but these are gluten-free. Think of porridge like a blank canvas, it is what you decorate it with that really makes it. It is all a matter of taste and preferences. Here is a simple recipe for perfect porridge.",
            "Serves" : "Makes 2 small portions | Takes 5 minutes | low FODMAP serving size 1 portion or half this recipe.",
            "Ingredients" : [
                "140g Gluten free porridge oats",
                "330ml water",
                "330ml rice milk",
                "(optional) Fresh berries - raspberries (60g max), blueberries (20 berries), strawberries (140g max)",
                "(optional) Coconut yogurt (125ml max)",
                "(optional) Maple syrup (2 Tbsp max)",
                "(optional) Pecan nuts (10 nuts max)",
                "(optional) Mixed seeds - pumpkin, sunflower, sesame (1 tbsp mixed seeds max)"

            ],
            "Instructions" : [
                "Put all ingredients in a pot and put on a medium to high heat",
                "It is typically sweeter if you cook it slowly on a low heat stirring occasionally (takes 10 -15 minutes). If you don’t have time turn heat up high, stir regularly and it should be done when it starts to bubble (approx 5 minutes)"
            ],
            "ImageURL" : ".images/Perfect_Porridge.png",
        },
        {
            "Recipe Name" : "",
            "Description" : "",
            "Serves" : "",
            "Ingredients" : [
                "",
                ""
            ],
            "Instructions" : [
                "",
                ""
            ],
            "ImageURL" : "",
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
    flex: 0 0 0px;
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