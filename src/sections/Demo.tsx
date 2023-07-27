import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import tableGif from '../assets/table.gif';
import treeGif from '../assets/tree.gif';
import setMode from '../setMode';

const Demo: Component = () => {
  const { darkMode } = setMode;
  const [index, setIndex] = createSignal(0);
  const gifs = [tableGif, treeGif];
  const description = [
    'nVision monitors server side fetch calls and displays them on our table where you can keep track of and filter requests',
    "The tree visualizes the application's file structure, and illustrates the relationship between files and components",
  ];
  return (
    <div class='pt-[8vh]'>
      <div class='bg-base/[.5] rounded-xl px-10 py-12 dark:bg-dark/[.5]'>
        <h2 class='text-center text-5xl p-10 font-bold'> Demo </h2>
        <div class='flex flex-col items-center '>
          <div class='flex w-1/4 justify-evenly'>
            <button
              class={darkMode() ? `btn btn-outline text-white hover:bg-[#49494d] ${index()===1 ? '' : 'bg-[#49494d]'}` : `btn btn-outline text-white hover:bg-base ${index()===1 ? '' : 'bg-base'}` }
              onclick={() => {
                setIndex(0);
              }}
            >
              Table
            </button>
            <button
              class={darkMode() ? `btn btn-outline text-white hover:bg-[#49494d] ${index()=== 0 ? '' : 'bg-[#49494d]'}` : `btn btn-outline text-white hover:bg-base ${index()===0 ? '' : 'bg-base'}` }
              onclick={() => {
                setIndex(1);
              }}
            >
              {' '}
              Tree{' '}
            </button>
          </div>
          <div class='flex flex-col justify-center items-center'>
            <p class='text-center p-10 text-2xl italic'>
              {description[index()]}
            </p>
            <img src={gifs[index()]} class='w-3/4' />
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default Demo;
