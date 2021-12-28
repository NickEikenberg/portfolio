import React from 'react';
import Title from '../Title';
import Project from '../MyWork/Project';
import { ReactIcon, JSIcon, TailwindIcon, NextIcon } from '../Icons/Index';

const MyProjects = () => {
  return (
    <div className="py-10 px-20">
      <Title title={'Projects'} />
      <Project
        title={'GameCogs'}
        subtitle={'Full-Stack Application | NextJS & Django'}
        description={
          'GameCogs is a marketplace app for used video games. It features full user authorization and a search bar powered by Axios calls using the International Games Database API. Users can search for games, add games to their collection, or list games for sale.'
        }
        link={'https://game-cogs.herokuapp.com/'}
        github={'https://github.com/NickEikenberg/game-cogs'}
        img={'img/GameCogs.png'}
        icons={[<NextIcon />, <JSIcon />, <TailwindIcon />]}
      />
    </div>
  );
};

export default MyProjects;
