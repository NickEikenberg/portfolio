import React from 'react';
import {
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRubyonrails,
  SiSqlite,
  SiTailwindcss,
} from 'react-icons/si';
import Title from '../Title';
import Icon from './Icon';

const AboutMe = () => {
  return (
    <div className="py-10 px-20" id="about">
      <Title title={'About Me'} />
      <div className="my-4">
        <h1 className="text-3xl">Bio:</h1>
        <p className="font-light text-lg">{`A lifelong computer nerd, I've always been curious about what goes on inside this thing we're both looking at. My passion for all things tech led me to a career in the video games industry, where I spent 5 years in QA, learning to crunch, and working together with my team to hit tough deadlines. As a programmer, I've taken what I've learned from those years and pushed myself to create incredible things with my own code. I'm able to set and hit goals while creating products that I'm truly proud of.`}</p>
      </div>

      <h1 className="text-3xl">Skills:</h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap">
          <Icon name={'JavaScript'} icon={<SiJavascript />} />
          <Icon name={'NodeJS'} icon={<SiNodedotjs />} />
          <Icon name={'React'} icon={<SiReact />} />
          <Icon name={'NextJS'} icon={<SiNextdotjs />} />
          <Icon name={'HTML5'} icon={<SiHtml5 />} />
          <Icon name={'CSS3'} icon={<SiCss3 />} />
          <Icon name={'Bootstrap'} icon={<SiBootstrap />} />
          <Icon name={'TailwindCSS'} icon={<SiTailwindcss />} />
          <Icon name={'MySQL'} icon={<SiMysql />} />
          <Icon name={'SQLite'} icon={<SiSqlite />} />
          <Icon name={'PostgreSQL'} icon={<SiPostgresql />} />
          <Icon name={'Heroku'} icon={<SiHeroku />} />
          <Icon name={'Netlify'} icon={<SiNetlify />} />
          <Icon name={'Postman'} icon={<SiPostman />} />
          <Icon name={'Ruby on Rails'} icon={<SiRubyonrails />} />
          <Icon name={'Django'} icon={<SiDjango />} />
          <Icon name={'Python'} icon={<SiPython />} />
          <Icon name={'MongoDB'} icon={<SiMongodb />} />
          <Icon name={'GitHub'} icon={<SiGithub />} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
