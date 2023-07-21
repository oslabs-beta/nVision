import Link from 'next/link';
import { useEffect, useState } from 'react';

interface CardProps {
  name: string;
  deleteFunc?: Function;
}

const FavoriteCard = (props: CardProps) => {
  const [pokemonPhoto, setPokemonPhoto] = useState("");

  useEffect(() => {
    async function fetchPokemonInfo() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
      const data = await response.json();

      setPokemonPhoto(data.sprites.front_default);
    }

    fetchPokemonInfo();
  },[props.name])

  return (
    <div className='flex flex-col justify-center items-center card w-48 bg-base-100 shadow-xl m-2 opacity-75'>
      <p className='m-4 text-xl'>
        {props.name[0].toUpperCase().concat(props.name.slice(1))}
      </p>
      <img src={pokemonPhoto} />
      <Link href={`/whos/${props.name}`}>
        <button className='btn btn-primary btn-sm m-3'>Learn more</button>
      </Link>
      {props.deleteFunc && (
        <button
          className='btn btn-xs btn-warning mb-3'
          onClick={() => {
            if (props.deleteFunc) props.deleteFunc(props.name);
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default FavoriteCard;
