import Link from 'next/link';
import { SavePokemon } from '@/sample-app/app/components/SavePokemon';

async function fetchPokemonInfo(name: String) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const data = await response.json();

  return data;
}

interface pokemonObj {
  name: String;
}

interface contextObj {
  params: pokemonObj;
}

const PokemonInfo = async (context: contextObj) => {
  const pokemonName = context.params.name;
  const charStats = await fetchPokemonInfo(pokemonName);

  return (
    <div className='flex flex-wrap flex-col items-center'>
      <h1 className='text-3xl m-7 font-bold'>Get Stats</h1>
      <div className='flex flex-hor justify-center items-center'>
        <Link href='../'>
          <button className='btn btn-secondary m-2'>GET MORE POKEMON</button>
        </Link>
        <Link href={`/favorites`}>
          <button className='btn btn-accent m-2'>FAVORITES</button>
        </Link>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-wrap justify-center items-center card w-48 bg-base-100 shadow-xl m-2 opacity-75'>
          <div className='text-center m-4'>
            <p>
              <b>Name: </b>
              {charStats.forms[0].name[0]
                .toUpperCase()
                .concat(charStats.forms[0].name.slice(1))}{' '}
            </p>
            <p>
              <b>Type: </b>
              {charStats.types[0].type.name}
            </p>
            <p>
              <b>Height: </b>
              {charStats.height}
            </p>
            <p>
              <b>Weight: </b>
              {charStats.weight}
            </p>
          </div>
          <div className='picBox'>
            <img
              src={charStats.sprites.front_default}
              alt={`A picture of ${pokemonName}`}
            ></img>
          </div>
          <SavePokemon pokemonName={pokemonName}/>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
