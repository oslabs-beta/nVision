'use client';

import Feed from '../components/Feed';

const Home = () => {
  const fetchAPI = async () => {
    const res = await fetch('/api/fetch');
    const data = await res.json();
    // console.log(data)
  }
  fetchAPI();

  const fetchSwapi = async () => {
    const res = await fetch('https://swapi.dev/api/people/abc');
    const data = await res.json();
  }
  fetchSwapi();

  const clearSpans = async () => {
    await fetch('/api/clearSpans');
  }
  clearSpans();

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
      <br className="max-md:hidden" />
        <span className="orange_gradient text-center">What's on your mind? </span>
        </h1>
      <p className='desc text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime exercitationem ipsum sapiente accusamus qui quisquam rerum explicabo. Ea fugiat dolores error delectus. Atque, cumque laudantium consectetur obcaecati fugit ad voluptatem.</p>
      <Feed/>
    </section>
  )
}

export default Home;