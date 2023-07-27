import type { Component } from 'solid-js';
import TeamCard from '../components/TeamCard';

const Team: Component = () => {
  return (
    <div id='Team'>
      <h2 class='text-center text-5xl italic p-10'>Meet The Team!</h2>
      <div class='flex justify-between'>
        <TeamCard name="Bennett" />
        <TeamCard name="Caitlin" />
        <TeamCard name="Isaac" />
        <TeamCard name="Jiyoung" />
        <TeamCard name="Sunny" />
      </div>
    </div>
  );
};

export default Team;
