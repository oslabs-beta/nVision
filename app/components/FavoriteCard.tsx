import Link from 'next/link';

interface CardProps {
  name: string;
}
async function fetchPokemonInfo(name: String) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const data = await response.json();

  return data;
}

const FavoriteCard = async (props: CardProps) => {

  async function deletePokemon(name: String) {
    fetch(`/api/favorites/${name}/`, {
      method: 'DELETE'
    })

    // need to refactor below 
    let cardToDelete = event.target.parentElement.parentElement.parentElement
    cardToDelete.remove()

    console.log("this was clicked:", cardToDelete)
  }

  const pokemonPhoto = await fetchPokemonInfo(props.name)

  return (
    <div className='nameCard'>
      <p className='pokemonName'>{props.name}</p>
      <img src={pokemonPhoto.sprites.front_default}></img>
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

export default FavoriteCard;
