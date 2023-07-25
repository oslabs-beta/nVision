import type { Component } from 'solid-js';
import FeatureCard from '../components/FeatureCard';
import logo from '../assets/logo.svg';

const Features: Component = () => {
  return (
    <div id='features' class='pt-[5vh] h-[95vh]'>
      <h1>Features</h1>
      <div class="flex">
        <FeatureCard image={logo} />
        <FeatureCard image={logo} />
        <FeatureCard image={logo} />
        <FeatureCard image={logo} />
      </div>
    </div>
  );
};

export default Features;
