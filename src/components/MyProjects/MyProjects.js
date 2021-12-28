import React from 'react';
import Title from '../Title';
import Project from '../MyWork/Project';
import { ReactIcon, JSIcon, TailwindIcon, NextIcon } from '../Icons/Index';

const MyProjects = () => {
  return (
    <div className="py-10 px-20">
      <Title title={'Projects'} />
      <div className="space-y-16">
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
        <Project
          title={'Tinier Bananas'}
          subtitle={'Full-Stack Application | React & Express'}
          description={
            'Tinier Bananas is a take on the game Exquisite Corpse, a party game where you create words/images with friends. Front-End built with React, Back-End built with Express, uses Socket.IO for player communication.'
          }
          link={'https://fierce-mesa-54468.herokuapp.com/'}
          github={'https://github.com/NickEikenberg/project3-frontend'}
          img={'img/TinierBananas.png'}
          icons={[<ReactIcon />, <TailwindIcon />]}
          flipped={true}
        />
      </div>
    </div>
  );
};

export default MyProjects;
