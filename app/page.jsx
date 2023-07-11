'use client';

// import * as fetch from 'node-fetch';

// import { trace } from '@opentelemetry/api'
// import { useEffect } from 'react';
import Feed from '@components/Feed';

const Home = () => {
  // async function fetchGithubStars() {
  //   return await trace
  //     .getTracer('nextjs-example')
  //     .startActiveSpan('fetchGithubStars', async (span) => {
  //       try {
  //         const res = await fetch('https://api.github.com/repos/vercel/next.js');
  //         const data = await res.json();
  //         return data.stargazers_count;
  //       } finally {
  //         span.end()
  //       }
  //     })
  // }
  // fetchGithubStars();
  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const res = await fetch('/api/fetch');
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   fetchAPI();
  // }, [])

  const fetchAPI = async () => {
    const res = await fetch('http://localhost:3000/api/fetch');
    const data = await res.json();
    console.log(data);
    console.log(res.status);
    console.log(res.statusText)
  }
  fetchAPI();

  const fetchSwapi = async () => {
    const res = await fetch('https://swapi.dev/api/people/abc');
    const data = await res.json();
    console.log(data);
    // console.log(res.status);
  }
  fetchSwapi();

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
      <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
      <p className='desc text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime exercitationem ipsum sapiente accusamus qui quisquam rerum explicabo. Ea fugiat dolores error delectus. Atque, cumque laudantium consectetur obcaecati fugit ad voluptatem.</p>
      <Feed/>
    </section>
  )
}

export default Home;