import Link from 'next/link';
import PokemonList from './components/PokemonList';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl m-7 font-bold'>Pokemon</h1>
      <Link href={'/favorites'}>
        <button className='btn btn-accent mb-5'>FAVORITES</button>
      </Link>
      <PokemonList />
    </div>
  );
};

export default Home;
