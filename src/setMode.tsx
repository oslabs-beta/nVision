import { createSignal, createRoot } from 'solid-js';

function setMode() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = createSignal(mediaQuery.matches);
  mediaQuery.addEventListener('change', (e) => {
    setDarkMode(e.matches)
    console.log(darkMode())
    if (darkMode()) document.body.classList.add('darkmode');
    else document.body.classList.remove('darkmode');
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode());
    document.body.classList.toggle('darkmode');
  };

  return { darkMode, toggleDarkMode };
}

export default createRoot(setMode);
