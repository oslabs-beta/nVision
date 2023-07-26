import type { Component } from 'solid-js';
import FeatureCard from '../components/FeatureCard';
import logo from '../assets/logo.svg';

const Features: Component = () => {
  return (
    <div id='features' class='pt-[10vh] h-[95vh] mb-[20vh] text-center'>
      <h1 class='mb-5 text-5xl font-bold '>Features</h1>
      <p class='max-w-sm m-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class='flex flex-wrap justify-evenly my-10'>
        <FeatureCard
          image={logo}
          feature='Feature 1'
          featureDes='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <FeatureCard
          image={logo}
          feature='Feature 2'
          featureDes='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <FeatureCard
          image={logo}
          feature='Feature 3'
          featureDes='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.F'
        />
      </div>
    </div>
  );
};

export default Features;
