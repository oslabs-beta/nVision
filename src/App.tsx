import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
