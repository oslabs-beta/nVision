import type { Component } from 'solid-js';
import clipboard from '../assets/clipboard.svg'
import CodeBlock from '../components/CodeBlock';

const GetStarted: Component = () => {

  return (
    <div id='Get-Started' class='pt-[10vh] h-[95vh] mb-[20vh]'>
      <h1 class='mb-5 text-5xl font-bold text-center'>Get Started</h1>
      <p>1. Navigate to your application directory and copy and paste the below commands to the terminal </p>
      <CodeBlock commands={['npm i @nvision/dashboard', 'npm i @nvision/tree', 'npx nvision']} />
      <p>2. Add the below script to your package.json file</p>
      <p>npm run nvision</p>
    </div>
  );
};

export default GetStarted;
