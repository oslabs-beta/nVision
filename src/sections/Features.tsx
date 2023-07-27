import type { Component } from 'solid-js';
import FeatureCard from '../components/FeatureCard';
import eyesLight from '../assets/light/observability.svg'
import eyesDark from '../assets/dark/observability.svg'
import treeLight from '../assets/light/tree.svg'
import treeDark from '../assets/dark/tree.svg'
import debugLight from '../assets/light/debug.svg'
import debugDark from '../assets/dark/debug.svg'
const Features: Component = () => {
  return (
    <div id='features' class='pt-[10vh] h-[95vh] mb-[20vh] text-center'>
      <h1 class='mb-5 text-5xl font-bold '>Features</h1>
      <p class='max-w-sm m-auto'>
        Enhance your development experience
      </p>
      <a class='max-w-sm m-auto italic underline' href='#medium' >
        Click Here to Learn More
      </a>
      <div class='flex flex-wrap justify-evenly my-10'>
        <FeatureCard
          darkImage={eyesDark}
          lightImage={eyesLight}
          feature='Observability'
          featureDes='Real-time observability for network requests made from Server Side Rendered Components in Next.js'
        />
        <FeatureCard
          darkImage={treeDark}
          lightImage={treeLight}
          feature='File Tree'
          featureDes='Interactive tree model showing nested file structure to help visualize complex routes.'
        />
        <FeatureCard
          darkImage={debugDark}
          lightImage={debugLight}
          feature='Debugging and Optimization'
          featureDes='Debug network requests and optimize performance through accurate error messages and filters'
        />
      </div>
    </div>
  );
};

export default Features;
