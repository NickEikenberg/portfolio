import React from 'react';
import Title from './Title';
import Project from './Project';
import { ReactIcon, JSIcon, TailwindIcon, NextIcon } from '../Icons/Index';

const MyWork = () => {
  return (
    <div className="py-10 px-20">
      <Title />
      <Project
        title={'UNIFRIENDS'}
        subtitle={'Front-End Application | NextJS'}
        description={
          'Unifriends is a generative 3D NFT project. I was hired to create a web page based on Figma designs provided by the client. This app was created with NextJS and TailwindCSS.'
        }
        link={'https://www.unifriends.io/'}
        github={''}
        img={'img/Unifriends.png'}
        icons={[<NextIcon />, <JSIcon />, <TailwindIcon />]}
      />
    </div>
  );
};

export default MyWork;
