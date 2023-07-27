import { createSignal, type Component } from 'solid-js';
import logo from '../assets/icon.png';
import darkMoon from '../assets/dark/dark.svg';
import lightMoon from '../assets/light/dark.svg';
import lightSun from '../assets/light/light.svg';
import darkSun from '../assets/dark/light.svg';
import setMode from '../setMode';

import linkedinLight from '../assets/light/linkedin.svg';
import linkedinDark from '../assets/dark/linkedin.svg';
import githubDark from '../assets/dark/github.svg';
import githubLight from '../assets/light/github.svg';

const Navbar: Component = () => {
  const { darkMode, toggleDarkMode } = setMode;
  const [navBord, setNavBord] = createSignal('');
  if (darkMode()) document.body.classList.add('darkmode');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && darkMode()) {
      setNavBord(' border-b-[1px] border-black border-solid');
    } else {
      setNavBord('');
    }
  });

  return (
    <div
      class={`flex justify-between bg-base px-5 py-8 h-[8vh] w-screen fixed top-0 left-0 z-[10] shadow-2xl dark:bg-dark ${navBord()}`}
    >
      <div id='nav-links' class='flex items-center'>
        <a class='mr-4' href='#nvision'>
          <img src={logo} class='w-10 h-10' alt='logo' />
        </a>
        <a class='mr-4' href='#Features'>
          Features
        </a>
        <a class='mr-4' href='#Demo'>
          Demo
        </a>
        <a class='mr-4' href='#Get-Started'>
          Get Started
        </a>
        <a class='mr-4' href='#Team'>
          Team
        </a>
      </div>
      <div id='nav-icons' class='flex items-center'>
        <a
          class='object-contain h-[20px] w-[20px] mr-4'
          target='_blank'
          href='https://github.com/oslabs-beta/nVision'
        >
          <img src={darkMode() ? githubDark : githubLight} />
        </a>
        <a class='mr-8' target='_blank' href='https://www.linkedin.com/company/nvisionjs/'>
          <img src={darkMode() ? linkedinDark : linkedinLight} />
        </a>
        <img
          src={darkMode() ? darkMoon : lightMoon}
          class='w-6 h-6'
          alt='dark-mode'
        />
        {darkMode() ? (
          <input
            type='checkbox'
            id='darkModeSwitch'
            class='toggle toggle-primary'
            onChange={toggleDarkMode}
          />
        ) : (
          <input
            type='checkbox'
            id='darkModeSwitch'
            class='toggle toggle-primary'
            onChange={toggleDarkMode}
            checked
          />
        )}
        <img
          src={darkMode() ? darkSun : lightSun}
          class='w-7 h-7'
          alt='light-mode'
        />
      </div>
    </div>
  );
};

export default Navbar;
