import Link from 'next/link';
import HomeComponent from './components/HomeCard';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* <div className='flex flex-hor justify-center items-center' */}
      <h1 className='text-5xl m-7 font-bold'>Pokemon</h1>
      <Link href={`/favorites`}>
        <button className='btn btn-accent mb-5'>FAVORITES</button>
      </Link>
      <HomeComponent/>
    </div>
  );
};

export default Home;
