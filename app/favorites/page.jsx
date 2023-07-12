'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
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
    getFavs();
  }, []);

  return (
    <div>
      <h1>Favorite Pokemon</h1>
      {favorites.map((pokemon) => (
        <PokemonCard name={pokemon.name} />
      ))}
      <Link href='./'>
        <button className='homeButton'>Get more Pokemon</button>
      </Link>
    </div>
  );
};

export default Favorites;
