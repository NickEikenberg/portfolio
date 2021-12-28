import React from 'react';

const Project = ({ title, subtitle, description, link, github, img }) => {
  return (
    <div className="flex">
      <div className="space-y-3 w-1/2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-xl font-normal">{subtitle}</h2>
        <p className="font-light">{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          Live Site
        </a>

        <div>
          <h1>Technologies Used</h1>
          <div className="flex flex-wrap"></div>
        </div>
      </div>
      <div className="border-2 border-black overflow-hidden rounded-md w-1/2">
        <img src={img} alt={title}></img>
      </div>
    </div>
  );
};

export default Project;
