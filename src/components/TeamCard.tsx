import { createSignal, type Component } from 'solid-js';
import isaac from '../assets/light/Isaac.png';
import jiyoung from '../assets/light/Jiyoung.png';
import sunny from '../assets/light/Sunny.png';
import bennett from '../assets/light/Bennett.png';
import caitlin from '../assets/light/Caitlin.png';
import darkIsaac from '../assets/dark/DarkIsaac.png';
import darkJiyoung from '../assets/dark/DarkJiyoung.png';
import darkSunny from '../assets/dark/DarkSunny.png';
import darkBennett from '../assets/dark/DarkBennett.png';
import darkCaitlin from '../assets/dark/DarkCaitlin.png';
import hoverIsaac from '../assets/hoverIsaac.png';
import setMode from '../setMode';

import githubLight from '../assets/light/github.svg';
import linkedinLight from '../assets/light/linkedin.svg';
import githubDark from '../assets/dark/github.svg';
import linkedinDark from '../assets/dark/linkedin.svg';

interface TeamCardProps {
  name: string;
}

const teamInfo: any = {
  Bennett: {
    light: bennett,
    dark: darkBennett,
    githubLink: 'https://github.com/bmgitcode',
    linkedinLink: 'https://www.linkedin.com/in/bennett-ma-a9701425b/',
  },
  Caitlin: {
    light: caitlin,
    dark: darkCaitlin,
    githubLink: 'https://github.com/codeFromCO',
    linkedinLink: 'https://www.linkedin.com/in/caitlin-odonohue/',
  },
  Isaac: {
    light: isaac,
    dark: darkIsaac,
    githubLink: 'https://github.com/Third-Isaac',
    linkedinLink: 'https://www.linkedin.com/in/thirdisaac/',
    hover: hoverIsaac,
  },
  Jiyoung: {
    light: jiyoung,
    dark: darkJiyoung,
    githubLink: 'https://github.com/jiyoungglee/',
    linkedinLink: 'https://www.linkedin.com/in/jiyoung-g-lee/',
  },
  Sunny: {
    light: sunny,
    dark: darkSunny,
    githubLink: 'https://github.com/xsunnibunnix',
    linkedinLink: 'https://www.linkedin.com/in/sunnypacheco/',
  },
};

const TeamCard: Component<TeamCardProps> = ({ name }: TeamCardProps) => {
  const { darkMode } = setMode;
  const { dark, light, githubLink, linkedinLink, hover } = teamInfo[name];
  const [hovered, setHovered] = createSignal(false);

  return (
    <div
      id={name}
      class='border border-purple-900 rounded-lg outline-white px-10 py-5'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div class='h-[160px] w-[120px]'>
        {hovered() && hover ? (
          <img src={hover} />
        ) : (
          <img src={darkMode() ? dark : light} />
        )}
      </div>
      <p class='flex justify-center text-2xl font-extrabold'>{name}</p>
      <div class='flex justify-center items-center'>
        <a class='object-contain h-[20px] w-[20px]' target='_blank' href={githubLink}>
          <img src={darkMode() ? githubDark : githubLight} />
        </a>
        <a target='_blank' href={linkedinLink} >
          <img src={darkMode() ? linkedinDark : linkedinLight} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
