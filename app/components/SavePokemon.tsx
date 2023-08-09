'use client';

import Link from "next/link";

export const SavePokemon = (props) => {
  const { pokemonName } = props;
  function savePokemon(name: String) {
    fetch(`/api/favorites/${name}/`, {
      method: 'POST',
    });
  }

  return (
    <div>
    <Link href='../'>
      <button
        className='btn btn-success btn-xs m-3'
        onClick={() => savePokemon(pokemonName)}
      >
        Save Pokemon
      </button>
    </Link>
  </div>
  )
}