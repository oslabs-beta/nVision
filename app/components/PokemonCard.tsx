import Link from 'next/link';

interface CardProps {
  name: string;
}

const PokemonCard = (props: CardProps) => {

  async function deletePokemon(name: String) {
    fetch(`/api/favorites/${name}/`, {
      method: 'DELETE'
    })

    let cardToDelete = event.target.parentElement.parentElement.parentElement
    cardToDelete.remove()

    console.log("this is what was clicked:", cardToDelete)
  }

  return (
    <div className='nameCard'>
      <p className='pokemonName'>{props.name}</p>
      <div className='multiButton'>
        <div>
      <Link href={`/whos/${props.name}`}>
        <button className='buttonCard'>Learn more</button>
      </Link>
      </div>
      <div>
      <button className='deleteButton' onClick={() => deletePokemon(props.name)}>Delete</button>
      </div>
      </div>
    </div>
  );
};

export default PokemonCard;
