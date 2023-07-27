import { type Component } from 'solid-js';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Team from './sections/Team';
import setMode from "./setMode";
import Demo from './sections/Demo';
import GetStarted from './sections/GetStarted';

const App: Component = () => {
  const { darkMode } = setMode;
  
  return (
    <div class={darkMode() ? 'dark' : ''}>
      <Navbar />
      <div class={`bg-indigo-100 dark:bg-[#1e1e20] px-20 pb-20`}>
        <Hero />
        <Features />
        <Demo />
        <GetStarted />
        <Team />
      </div>
    </div>
  );
};

export default App;
