import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
// import demoGif from ''

const Features: Component = () => {
  const [gif, setgif] = createSignal(0);
  return (
    <div id='Demo'>
      <h2> Demo</h2>
    </div>
  );
};

export default Features;
