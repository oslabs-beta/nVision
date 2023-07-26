import type { Component } from 'solid-js';
import isaac from '../assets/LightIsaac.png';
import jiyoung from '../assets/Jiyoung.png';
import sunny from '../assets/Sunny.png';
import bennett from '../assets/Bennett.png';
import caitlin from '../assets/Caitlin.png';
// import darkIsaac from '../assets'
import darkJiyoung from '../assets/DarkJiyoung.png';
import darkSunny from '../assets/DarkSunny.png';
import darkBennett from '../assets/DarkBennett.png';
import darkCaitlin from '../assets/DarkCaitlin.png';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
const Team: Component = () => {
  return (
    <div id='Team' class=' p-20'>
      <h2 class='text-center text-5xl italic p-10'>Meet The Team!</h2>
      <div class=' mx-auto flex '>
        <div
          id='Sunny'
          class='border border-purple-900 rounded-lg outline-white p-3'
        >
          {/* Portrait */}
          <img src={sunny} class='rounded-lg' />
          {/* Name */}
          <p class='flex justify-center text-2xl font-extrabold'>Sunny</p>
          {/* LINKS AND ICONS */}
          <div class='flex justify-center items-center'>
            {/* GIthub img / link*/}
            <a
              class='object-contain h-18 w-18'
              href='https://github.com/xsunnibunnix'
            >
              <img src={github} />
            </a>
            {/* Linkedin img / link */}
            <a href='https://www.linkedin.com/in/sunnypacheco/'>
              <img src={linkedin} />
            </a>
          </div>
        </div>
        <div
          id='Jiyoung'
          class='border border-purple-900 rounded-lg outline-white p-3'
        >
          {/* Portrait */}
          <img src={jiyoung} class='rounded-lg' />
          {/* Name */}
          <p class='flex justify-center text-2xl font-extrabold'>Jiyoung</p>
          {/* LINKS AND ICONS */}
          <div class='flex justify-center items-center'>
            {/* GIthub img / link*/}
            <a
              class='object-contain h-18 w-18'
              href='https://github.com/jiyoungglee/
'
            >
              <img src={github} />
            </a>
            {/* Linkedin img / link */}
            <a href='https://www.linkedin.com/in/jiyoung-g-lee/'>
              <img src={linkedin} />
            </a>
          </div>
        </div>
        <div
          id='Isaac'
          class='border border-purple-900 rounded-lg outline-white p-3'
        >
          {/* Portrait */}
          <img src={isaac} class='rounded-lg' />
          {/* Name */}
          <p class='flex justify-center text-2xl font-extrabold'>Isaac</p>
          {/* LINKS AND ICONS */}
          <div class='flex justify-center items-center'>
            {/* GIthub img / link*/}
            <a
              class='object-contain h-18 w-18'
              href='https://github.com/Third-Isaac'
            >
              <img src={github} />
            </a>
            {/* Linkedin img / link */}
            <a href='https://www.linkedin.com/in/thirdisaac/'>
              <img src={linkedin} />
            </a>
          </div>
        </div>
        <div
          id='Caitlin'
          class='border border-purple-900 rounded-lg outline-white p-3'
        >
          {/* Portrait */}
          <img src={caitlin} class='rounded-lg' />
          {/* Name */}
          <p class='flex justify-center text-2xl font-extrabold'>Caitlin</p>
          {/* LINKS AND ICONS */}
          <div class='flex justify-center items-center'>
            {/* GIthub img / link*/}
            <a
              class='object-contain h-18 w-18'
              href='https://github.com/codeFromCO'
            >
              <img src={github} />
            </a>
            {/* Linkedin img / link */}
            <a href='https://www.linkedin.com/in/caitlin-odonohue/'>
              <img src={linkedin} />
            </a>
          </div>
        </div>
        <div
          id='Bennet'
          class='border border-purple-900 rounded-lg outline-white p-3'
        >
          {/* Portrait */}
          <img src={bennett} class='rounded-lg' />
          {/* Name */}
          <p class='flex justify-center text-2xl font-extrabold'>Bennett</p>
          {/* LINKS AND ICONS */}
          <div class='flex justify-center items-center'>
            {/* GIthub img / link*/}
            <a
              class='object-contain h-18 w-18'
              href='https://github.com/bmgitcode'
            >
              <img src={github} />
            </a>
            {/* Linkedin img / link */}
            <a href='https://www.linkedin.com/in/bennett-ma-a9701425b/'>
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
