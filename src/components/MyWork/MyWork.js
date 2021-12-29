import React from 'react';
import Title from '../Title';
import Project from './Project';
import { JSIcon, TailwindIcon, NextIcon } from '../Icons/Index';

const MyWork = () => {
  return (
    <div className="py-5 px-20" id="myWork">
      <Title title={'My Work'} />
      <Project
        title={'UNIFRIENDS'}
        subtitle={'Front-End Application | NextJS'}
        description={
          'Unifriends is a generative 3D NFT project. I was hired to create a web page based on Figma designs provided by the client. This app was created with NextJS and TailwindCSS, and is fully responsive with a unique mobile and desktop layout.'
        }
        link={'https://www.unifriends.io/'}
        github={''}
        img={'img/Unifriends.png'}
        icons={[<NextIcon />, <JSIcon />, <TailwindIcon />]}
        flipped={false}
      />
    </div>
  );
};

export default MyWork;
