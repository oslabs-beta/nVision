'use client';

import Link from 'next/link';
import { Suspense } from 'react';

async function fetchPokemonInfo(name: String) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const data = await response.json();

  return data;
}

//stats to display:
// name from forms[0].name
// type from types[0].type.name
// image from spites.front_default;
// height from height

interface pokemonObj {
  name: String;
}

interface contextObj {
  params: pokemonObj;
}

const PokemonInfo = async (context: contextObj) => {
  const pokemonName = context.params.name;
  const charStats = await fetchPokemonInfo(pokemonName);

  function savePokemon(name: String) {
    fetch(`/api/favorites/${name}/`, {
      method: 'POST',
    });
  }

  return (
    <div>
      <h1>Get Stats</h1>
      <div className='double-buttons'>
        <Link href='../'>
          <button className='homeButton'>GET MORE POKEMON</button>
        </Link>
        <Link href={`/favorites`}>
          <button className='favoriteCard'>FAVORITES</button>
        </Link>
      </div>
      <div className='individualCard'>
        <div className='individualCardText'>
          <p>Name: {charStats.forms[0].name} </p>
          <p>Type: {charStats.types[0].type.name}</p>
          <p>Height: {charStats.height}</p>
          <p>Weight: {charStats.weight}</p>
        </div>
        <div className='picBox'>
          <img src={charStats.sprites.front_default}></img>
        </div>
        <div>
        <Link href='../'>
          <button
            className='saveButton'
            onClick={() => savePokemon(pokemonName)}
          >
            Save Pokemon
          </button>
          </Link>
          <Suspense fallback={<div>Fetching stats...</div>}></Suspense>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
