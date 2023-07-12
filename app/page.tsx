import Link from 'next/link';
import HomeComponent from './components/HomeCard';

const Home = () => {
  return (
    <div className='mainTitle'>
      <h1>Pokemon</h1>
      <Link href={`/favorites`}>
        <button className='favoriteCard'>FAVORITES</button>
      </Link>
      <HomeComponent/>
    </div>
  );
};

export default Home;
