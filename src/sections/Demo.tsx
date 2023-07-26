import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import DemoGif from '../components/DemoGif';

const [gif, setgif] = createSignal(1);
const Demo: Component = () => {
  return (
    <div id='Demo' class=''>
      <h2> Demo </h2>
      <div class='flex '>
        <div>
          <button
            class='btn'
            onclick={() => {
              setgif(0);
            }}
          >
            {' '}
            3w Table{' '}
          </button>
          <button
            class='btn'
            onclick={() => {
              setgif(1);
            }}
          >
            {' '}
            Tree{' '}
          </button>
        </div>
        <DemoGif gif={gif} />
      </div>
    </div>
  );
};

export default Demo;
