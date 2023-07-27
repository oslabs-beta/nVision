import type { Component } from 'solid-js';
import logo from '../assets/logo.svg';

const Hero: Component = () => {
  return (
    <div
      id='nvision'
      class='min-h-[93vh] flex justify-center items-center mt-[8vh]'
    >
      <div class='bg-base/[.5] rounded-xl px-10 py-16 dark:bg-dark/[.5]'>
        <div class='hero-content flex-col lg:flex-row'>
          <img src={logo} class='w-1/3' />
          <div>
            <h1 class='text-6xl font-extrabold'>nVision</h1>
            <p class='mb-5 mt-2 italic text-xl font-bold'>A developer tool for Next.js</p>
            <p class='pr-8 text-lg'>
              nVision is an open-source developer tool for Next.js applications.
              Designed to fully leverage the power of Server-Side rendering that
              Next.js offers. Gain a new perspective of your application through
              active network observability and visualization of your application
              architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
