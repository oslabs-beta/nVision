import type { Component } from 'solid-js';
import TeamCard from '../components/TeamCard';

const Team: Component = () => {
  return (
    <div class='pt-[8vh]'>
      <div class='bg-base/[.5] rounded-xl px-10 py-12 dark:bg-dark/[.5]'>
        <h2 class='text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black mb-16'>
          Meet The Team!
        </h2>
        <div class='flex justify-between'>
          <TeamCard name='Bennett' />
          <TeamCard name='Caitlin' />
          <TeamCard name='Isaac' />
          <TeamCard name='Jiyoung' />
          <TeamCard name='Sunny' />
        </div>
      </div>
    </div>
  );
};

export default Team;
