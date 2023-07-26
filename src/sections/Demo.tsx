import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import tableGif from '../assets/table.gif';
import treeGif from '../assets/tree.gif';

const [index, setIndex] = createSignal(0);
const Demo: Component = () => {
  const gifs = [tableGif, treeGif];
  const description = [
    'nVision monitors server side fetch calls and displays them on our table where you can keep track of and filter requests',
    "The tree visualizes the application's file structure, and illustrates the relationship between files and components",
  ];
  return (
    <div id='Demo' class=''>
      <h2 class='text-center text-5xl italic p-10'> Demo </h2>
      <div class='flex flex-col items-center '>
        <div class='flex'>
          <button
            class='btn btn-outline btn-glass'
            onclick={() => {
              setIndex(0);
            }}
          >
            {' '}
            Table{' '}
          </button>
          <button
            class='btn btn-outline'
            onclick={() => {
              setIndex(1);
            }}
          >
            {' '}
            Tree{' '}
          </button>
        </div>
        <div class='flex flex-col justify-center items-center'>
          <p class='text-center p-10 text-2xl italic'>{description[index()]}</p>
          <img src={gifs[index()]} class='w-3/4' />
          {/* <img src={gifs[gif]}></img> */}
        </div>
      </div>
    </div>
  );
};

export default Demo;
