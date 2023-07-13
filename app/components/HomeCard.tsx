'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

async function getPokemon() {
  // fetch request to pokemon api
  let response = await fetch('https://pokeapi.co/api/v2/pokemon');

  let usablePokemonInfo = response.json();
  // this will return an object with count, next, previous and results; results an array of 20 pokemon objects each with a name and url

  return usablePokemonInfo;
}

async function fetchPokemonInfo(name: String) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const data = await response.json();

  return data;
}

const HomeComponent = () => {
  const [pokemon, setPokemon] = useState<[]>([]);

  const fetchAllPokemon = async () => {
    const starterPokemon = await getPokemon();
    setPokemon(starterPokemon.results);
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  interface PokemonObj {
    name: string;
  }

  if (pokemon) {
    const pokemonData = pokemon.map( async(pokemon: PokemonObj) => {

      const pokemonPhoto = await fetchPokemonInfo(pokemon.name)

      return (
        <div className='card w-48 bg-base-100 shadow-xl m-2 items-center opacity-75'>
          <p className='m-4 text-xl'>{pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}</p>
          <img src={pokemonPhoto.sprites.front_default}></img>
          <Link href={`/whos/${pokemon.name}`}>
            <button className='btn btn-primary btn-sm m-4' id={pokemon.name}>
              Learn more
            </button>
          </Link>
        </div>
      );
    });

    return <div className='flex flex-wrap flex-hor justify-center'>{pokemonData}</div>;
  }
};

export default HomeComponent;
