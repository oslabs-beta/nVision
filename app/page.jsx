import Feed from '@components/Feed';

const Home = () => {
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