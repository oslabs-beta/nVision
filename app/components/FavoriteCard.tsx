import Link from 'next/link';

interface CardProps {
  name: string;
  deleteFunc: Function
}
async function fetchPokemonInfo(name: String) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const data = await response.json();

  return data;
}

const FavoriteCard = async (props: CardProps) => {
  
  const pokemonPhoto = await fetchPokemonInfo(props.name);

  return (
    <div className='flex flex-col justify-center items-center card w-48 bg-base-100 shadow-xl m-2 opacity-75'>
      <p className='m-4 text-xl'>{props.name[0].toUpperCase().concat(props.name.slice(1))}</p>
      <img src={pokemonPhoto.sprites.front_default}></img>
      <Link href={`/whos/${props.name}`}>
        <button className='btn btn-primary btn-sm m-3'>Learn more</button>
      </Link>
      <button
        className='btn btn-xs btn-warning mb-3'
        onClick={() => props.deleteFunc(props.name)}
      >
        Delete
      </button>
    </div>
  );
};

export default FavoriteCard;
