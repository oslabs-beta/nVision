import type { Component } from 'solid-js';
import logo from '../assets/logo.svg';
import dark from '../assets/dark.svg';

const Navbar: Component = () => {
  return (
    <div class='flex justify-between bg-indigo-500 px-5 py-8 h-[5vh] sticky top-0 z-[99]'>
      <div id='nav-links' class='flex items-center'>
        <a class='mr-4' href='#nvision'>
          <img src={logo} class='w-10 h-10' alt='logo' />
        </a>
        <a class='mr-4' href='#features'>
          Features
        </a>
        <a class='mr-4' href='#Team'>
          Team
        </a>
        <a class='mr-4' href='#link3'>
          Link 3
        </a>
      </div>
      <div id='nav-icons' class='flex items-center'>
        <div id='mode-button' class='dropdown dropdown-end dropdown-bottom'>
          <label tabIndex={0}>
            <img src={dark} class='w-8 h-8' alt='dark-mode' />
          </label>
          <ul
            tabIndex={0}
            class='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Light Mode</a>
            </li>
            <li>
              <a>Dark Mode</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
