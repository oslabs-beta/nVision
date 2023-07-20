'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import { v4 as uuid } from 'uuid';

interface PokemonObj {
  name: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<[]>([]);

  async function deletePokemon(name: String) {
    await fetch(`/api/favorites/${name}/`, {
      method: 'DELETE',
    });
    getFavs();
  }

  const getFavs = async () => {
    try {
      const response = await fetch('/api/favorites', {
        method: 'GET',
      });
      const data = await response.json();
      setFavorites(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <div className='flex flex-wrap flex-col items-center'>
      <h1 className='text-3xl m-6 font-bold'>Favorite Pokemon</h1>
      <div className='flex flex-hor justify-center items-center'>
        <Link href='./'>
          <button className='btn btn-secondary mb-3'>GET MORE POKEMON</button>
        </Link>
      </div>
      <div className='flex flex-wrap flex-row justify-center items-center'>
        {favorites.map((pokemon: PokemonObj) => (
          <FavoriteCard key={uuid()} name={pokemon.name} deleteFunc={deletePokemon} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
