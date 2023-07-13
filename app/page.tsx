import Link from 'next/link';
import HomeComponent from './components/HomeCard';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* <div className='flex flex-hor justify-center items-center' */}
      <h1 className='text-3xl m-7'>Pokemon</h1>
      <Link href={`/favorites`}>
        <button className='btn btn-accent'>FAVORITES</button>
      </Link>
      <HomeComponent/>
    </div>
  );
};

export default Home;
