import Link from 'next/link';

interface CardProps {
  name: string;
}

const PokemonCard = (props: CardProps) => {
  async function handleClick() {
    // Add favorite if not exist,
    // if exist, remove favorite
  }

  return (
    <div className='nameCard'>
      <p className='pokemonName'>{props.name}</p>
      <Link href={`/whos/${props.name}`}>Learn more</Link>
      <button onClick={handleClick}>Add Favorite</button>
    </div>
  );
};

export default PokemonCard;
