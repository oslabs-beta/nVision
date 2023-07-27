import { type Component } from 'solid-js';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Team from './sections/Team';
import setMode from './setMode';
import Demo from './sections/Demo';
import GetStarted from './sections/GetStarted';

const App: Component = () => {
  const { darkMode } = setMode;

  return (
    <div class={darkMode() ? 'dark px-20 pb-20' : 'px-20 pb-20'}>
      <Navbar />
      <Hero />
      <div id='Features' class='pb-[8vh]' />
      <Features />
      <div id='Demo' class='pb-[8vh]' />
      <Demo />
      <div id='Get-Started' class='pb-[8vh]' />
      <GetStarted />
      <div id='Team' class='pb-[8vh]' />
      <Team />
    </div>
  );
};

export default App;
