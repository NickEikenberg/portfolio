import React from 'react';

const About = () => {
  return (
    <div className="pt-10 px-20 space-y-5">
      <div>
        <h2 className="text-xl translate-x-0.5 ">Hi, my name is</h2>
        <div className="relative">
          <h1 className="text-5xl font-semibold text-red-500 ">
            Nicholas Eikenberg,
          </h1>
          <h1 className="text-5xl font-semibold text-blue-700 opacity-50 absolute top-0 translate-x-1">
            Nicholas Eikenberg,
          </h1>
        </div>
        <p className="text-3xl font-semibold ">
          and I <span className="text-red-500">love</span> to code.{' '}
        </p>
      </div>
      <p className="font-light text-lg">
        {`I’m a full-stack software engineer coming from a
        background in the video games industry. I have a passion for creating beautiful websites that are intuitive and accessible.`}
      </p>
    </div>
  );
};

export default About;
