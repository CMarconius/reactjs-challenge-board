import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Pokedex.css'

function Pokedex() {

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

    const [currentPokeId, setCurrentPokeId] = useState(250);
    const [currentPokeData, setCurrentPokeData] = useState();
    const [currentPokeName, setCurrentPokeName] = useState();
    const [currentPokeImage, setCurrentPokeImage] = useState();

    const [allPokemonNames, setAllPokemonNames] = useState([]);

    const backOne = () => {
        if (currentPokeId !== 1) {
            setCurrentPokeId(currentPokeId - 1);
        }
    }
    const forwardOne = () => {
        if (currentPokeId !== 898) {
            setCurrentPokeId(currentPokeId + 1);
        }
    }

    const backTen = () => {
        if (currentPokeId > 10) {
            setCurrentPokeId(currentPokeId - 10);
        }
        else if (currentPokeId !== 1) {
            setCurrentPokeId(1);
        }
    }
    const forwardTen = () => {
        if (currentPokeId < 888) {
            setCurrentPokeId(currentPokeId + 10);
        }
        else if (currentPokeId !== 898) {
            setCurrentPokeId(898);
        }
    }

    useEffect(() => {
        axios.get(`${baseUrl+'?limit=898'}`)
        .then((response) => {
            setAllPokemonNames(response.data.results)
            console.log(allPokemonNames);
        });
    }, [])

    useEffect(() => {
        axios.get(`${baseUrl+currentPokeId}`)   // Get Current Pokemon by Id
        .then((response) => {

            setCurrentPokeName(() => {          // Set Pokemon Name (Capitalise first letter first)
                let n = response.data.name;
                return n.charAt(0).toUpperCase() + n.slice(1);
            });

            console.log(allPokemonNames);
            setCurrentPokeImage(response.data.sprites.front_default);   // Set Pokemon Image
        })
    }, [currentPokeId])

    
    return (
        <div className="pokedex">
            <div className="pokedexImageSection">
                <img src="images/Pokedex/pokedex_center.png"/>
                <img src={currentPokeImage} alt="" />
            </div> 

            
            <div className="currentPokeInfo">
                <div className="infoContainer">
                    <h2>Pokemon Number: {currentPokeId}</h2>
                    <h2>Name: {currentPokeName}</h2>
                </div>
            </div>

            <div className="arrowRow">
                <img onClick={backTen} className="arrow" src="images/Pokedex/arrow-double-left.svg" alt="" />

                <img onClick={backOne} className="" src="images/Pokedex/arrow-left.svg" alt="" />

                
                <img onClick={forwardOne} className="" src="images/Pokedex/arrow-right.svg" alt="" />

                <img onClick={forwardTen} className="arrow" src="images/Pokedex/arrow-double-right.svg" alt="" />
            </div>
        </div>
    )
}

export default Pokedex
