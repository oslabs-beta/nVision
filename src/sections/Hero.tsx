import type { Component } from 'solid-js';
import logo from '../assets/logo.svg';
const Hero: Component = () => {
  return (
    <div class='h-[95vh]'>
      <div class='hero'>
        <div class='hero-content flex-col lg:flex-row-reverse'>
          <img src={logo} alt='nVision'></img>
          <div>
            <h1 class='mb-5 text-5xl font-bold'>nVision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div class='mockup-code'>
        <pre data-prefix='$'>
          <code>npm i @nvision/dashboard</code>
        </pre>
        <pre data-prefix='$'>
          <code>npm i @nvision/tree</code>
        </pre>
      </div>
    </div>
  );
};

export default Hero;