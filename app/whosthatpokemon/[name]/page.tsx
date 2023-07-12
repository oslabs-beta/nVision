import Link from 'next/link';
import { Suspense } from 'react';

async function fetchPokemonInfo(name: String) {

const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`
  );

  const contents = await response.json()

  return contents 
}

const PokemonInfo = () => {
  return (

    <div className='individualCard'>
      {/* don't think below link is correct */}
      <Link href='./app'>Back to Pokemon</Link>
      <Suspense fallback={<div>Fetching stats...</div>}></Suspense>

    </div>

  )
}

console.log(fetchPokemonInfo('ditto'))