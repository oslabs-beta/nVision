import type { Component } from 'solid-js';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Team from './sections/Team';
import Feedback from './sections/Feedback';
import Demo from './sections/Demo';
const App: Component = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Feedback />
      <Demo />
      <Team />
    </>
  );
};

export default App;
