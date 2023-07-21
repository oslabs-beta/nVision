'use client';

import { useState, useEffect } from 'react';
import FavoriteCard from './FavoriteCard';
import {v4 as uuid} from 'uuid'

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<[]>([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const starterPokemon = await response.json()
      setPokemon(starterPokemon.results);
    };

    fetchAllPokemon();
  }, []);

  return (
    <div className='flex flex-wrap flex-hor justify-center'>
      {pokemon.map(({ name }) => {
        return <FavoriteCard key={uuid()} name={name} />;
      })}
    </div>
  );
};

export default PokemonList;
