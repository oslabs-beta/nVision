import { v4 as uuid } from 'uuid';
import ServerCard from './ServerCard';

const fetchAllPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/', {
      method: 'GET',
    });
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
  }
};

const PokemonList = async () => {
  const pokemon = await fetchAllPokemon();
  return (
    <div className='flex flex-wrap flex-hor justify-center'>
      {pokemon.map(({name}: {name: string}) => {
        return <ServerCard key={uuid()} name={name} />;
      })}
    </div>
  );
};

export default PokemonList;
