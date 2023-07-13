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
    <div className='flex flex-col justify-center items-center card w-50 bg-base-100 shadow-xl m-2'>
      <p className='m-2'>{props.name}</p>
      <img src={pokemonPhoto.sprites.front_default}></img>
      <Link href={`/whos/${props.name}`}>
        <button className='btn btn-primary btn-xs m-2'>Learn more</button>
      </Link>
      <button
        className='btn btn-xs btn-warning m-2'
        onClick={() => props.deleteFunc(props.name)}
      >
        Delete
      </button>
    </div>
  );
};

export default FavoriteCard;
