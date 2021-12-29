import React from 'react';
import Title from '../Title';
import Project from '../MyWork/Project';
import {
  ReactIcon,
  JSIcon,
  TailwindIcon,
  NextIcon,
  NodeIcon,
  MongoIcon,
  HTMLicon,
  CSSicon,
  DjangoIcon,
} from '../Icons/Index';

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
          icons={[<NextIcon />, <DjangoIcon />, <TailwindIcon />]}
        />
        <Project
          title={'Tinier Bananas'}
          subtitle={'Full-Stack Application | React & Express'}
          description={
            'Tinier Bananas is a take on the game Exquisite Corpse, a party game where you create words/images with friends. Users join a chat room and exchange messages back and forth to create a story together. Front-End built with React, Back-End built with Express, uses Socket.IO for player communication.'
          }
          link={'https://fierce-mesa-54468.herokuapp.com/'}
          github={'https://github.com/NickEikenberg/project3-frontend'}
          img={'img/TinierBananas.png'}
          icons={[<ReactIcon />, <TailwindIcon />, <MongoIcon />]}
          flipped={true}
        />
        <Project
          title={`Who's That Pokemon?`}
          subtitle={'Front-End Application | JQuery'}
          description={`Who's That Pokemon is a guessing game utilizing the PokeAPI. The user is shown a random Pokemon's silhouette, and must correctly type the name of that Pokemon to earn points. Built with Vanilla JS, JQuery, HTML, and CSS.`}
          link={'https://nervous-raman-502e99.netlify.app/'}
          github={'https://github.com/NickEikenberg/Project-1'}
          img={'img/Pokemon.png'}
          icons={[<JSIcon />, <HTMLicon />, <CSSicon />]}
        />
      </div>
    </div>
  );
};

export default MyProjects;
