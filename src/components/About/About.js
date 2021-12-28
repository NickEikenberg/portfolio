import React from 'react';

const About = () => {
  return (
    <div className="py-10 px-20 space-y-5">
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
      <p>
        {`I’m a full-stack software engineer coming from a
        background in the video games industry. After 5 years in the
        Quality Assurance, I’ve learned that I thrive under the pressure of hitting
        deadlines while still maintaining a high-quality work output.`}
      </p>
    </div>
  );
};

export default About;
