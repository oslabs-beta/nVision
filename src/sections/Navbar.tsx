import { createSignal, type Component } from 'solid-js';
import logo from '../assets/icon.png';
import dark from '../assets/light/dark.svg';
import light from '../assets/light/light.svg';
import setMode from '../setMode';

const Navbar: Component = () => {
  const { darkMode, toggleDarkMode } = setMode;
  const [navBord, setNavBord] = createSignal('');
  if (darkMode()) document.body.classList.add('darkmode');

  window.addEventListener('scroll', () => {
    if(window.scrollY > 0 && darkMode()) {
      setNavBord(' border-b-[1px] border-black border-solid')
    } else {
      setNavBord('');
    }
  })

  return (
    <div class={`flex justify-between bg-base px-5 py-8 h-[5vh] sticky top-0 z-[99] shadow-2xl dark:bg-[#1e1e20] ${navBord()}`}>
      <div id='nav-links' class='flex items-center'>
        <div class='logo'>nVision</div>
        <a class='mr-4' href='#nvision'>
          <img src={logo} class='w-10 h-10' alt='logo' />
        </a>
        <a class='mr-4' href='#features'>
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
        <img src={dark} class='w-6 h-6' alt='dark-mode' />
        <input
          type='checkbox'
          class="toggle toggle-primary"
          checked
          onChange={toggleDarkMode}
        />
        <img src={light} class='w-7 h-7' alt='light-mode' />
      </div>
    </div>
  );
};

export default Navbar;
