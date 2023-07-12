import Link from 'next/link';
import PokemonComponent from './components/Pokemon';

const Home = () => {
  return (
    <div className='mainTitle'>
      <h1>Pokemon</h1>
      <Link href={`/favorites`}>
        <button className='favoriteCard'>FAVORITES</button>
      </Link>
      <PokemonComponent />
    </div>
  );
};

export default Home;
