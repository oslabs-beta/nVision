import type { Component } from 'solid-js';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
};

export default App;
