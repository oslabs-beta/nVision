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

const PokemonInfo = async (name) => {
  const charStats = await fetchPokemonInfo(1);

  console.log(charStats);

  return (
    <div>
      <h1>Get Stats</h1>
      <Link href='../'>
        <button className='homeButton'>Get more Pokemon</button>
      </Link>

      <div className='individualCard'>
        <div className='individualCardText'>
          <p>Name: {charStats.forms[0].name} </p>
          <p>Type: {charStats.types[0].type.name}</p>
          <p>Height: {charStats.height}</p>
          <p>Weight: {charStats.weight}</p>
        </div>
        <div className='picBox'>
          <img src={charStats.sprites.front_default}></img>
          <button>Save Pokemon</button>
          <Suspense fallback={<div>Fetching stats...</div>}></Suspense>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
