'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/Link';

async function getPokemon() {
  // fetch request to pokemon api
  let response = await fetch('https://pokeapi.co/api/v2/pokemon');

  let usablePokemonInfo = response.json();
  // this will return an object with count, next, previous and results; results an array of 20 pokemon objects each with a name and url

  return usablePokemonInfo;
}

const PokemonComponent = () => {
  const [pokemon, setPokemon] = useState(null);

  const fetchAllPokemon = async () => {
    const starterPokemon = await getPokemon();
    setPokemon(starterPokemon.results);
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  if (pokemon) {
    const pokemonData = pokemon.map((pokemon, i) => {
      console.log(pokemon.name, i);

      return (
        <div className='nameCard'>
          <p className='pokemonName'>{pokemon.name}</p>
          <Link href={`/whos/${pokemon.name}`}>
            <button className='buttonCard' id={pokemon.name} onClick={test}>
              Learn more
            </button>
          </Link>
        </div>
      );
    });

    function test() {
      return console.log('in the get stats button');
    }

    return (
    <div className='pokemonNameContainer'>{pokemonData}
    </div>)
  }
};

export default PokemonComponent;

// cards on home page, clicking it should take you to /ditto and display info
// find more pokemon and if you like it it gets saved to your home page?
