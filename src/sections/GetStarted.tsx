import type { Component } from 'solid-js';
import clipboard from '../assets/clipboard.svg';
import CodeBlock from '../components/CodeBlock';

const GetStarted: Component = () => {
  return (
    <div class='pt-[8vh] min-h-[95vh]'>
      <div class='bg-base/[.5] rounded-xl px-10 py-12 dark:bg-dark/[.5]'>
        <h1 class='mb-5 text-5xl font-bold text-center'>Get Started</h1>
        <div class='text-lg'>
          <p class='pb-6' >
            1. Navigate to your application directory and copy and paste the
            below commands to the terminal. This will create all the necessary
            files required to trace and visualize your application.
          </p>
          <CodeBlock commands={['npm i nvisionjs', 'npx nvisionjs-create']} />
          <p class='py-6'>2. Add the below script to your package.json file</p>
          <CodeBlock commands={['"nvision": "node --require ./nvisionServer.js & next dev"']} plain />
          <p class='py-6'>3. Run "npm run nvision" in your terminal.</p>
          <CodeBlock commands={['npm run nvision']} />
          <p class='py-6'>
            4. Navigate to http://localhost:3000/nvisionDashboard (or your local
            development environment) first.
          </p>
          <p>
            5. In a new window, open your application development environment
            navigate through your app to view updates in the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
