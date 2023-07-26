import type { Component } from 'solid-js';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Team from './sections/Team';
import Demo from './sections/Demo';
const App: Component = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Team />
    </>
  );
};

export default App;
