import Link from 'next/link'

const Favorites = async () => {
  const favorites = await fetch('/api/favorites',{
    method:'GET'
  });

    return (
      <div>
        <h1>Favorite Pokemon</h1>
        {favorites.map((pokemon) => {
          return (
            <div className='nameCard'>
              <p className='pokemonName'>{pokemon.name}</p>
              <Link href={`/whos/${pokemon.name}`}>
              <button className='buttonCard' id={pokemon.name} onClick={test}>
                Learn more
              </button>
              </Link>
            </div>
          )
        })}
        <Link href='./'>
        <button className='homeButton'>Get more Pokemon</button>
        </Link>
      </div>
    );
  };

  export default Favorites 



