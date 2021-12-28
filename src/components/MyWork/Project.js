import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Project = ({
  title,
  subtitle,
  description,
  link,
  github,
  img,
  icons,
  flipped,
}) => {
  return (
    <div className="flex">
      <div className={`space-y-3 w-1/2 ${flipped ? 'order-2' : null}`}>
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-xl font-normal">{subtitle}</h2>
        <p className="font-light">{description}</p>
        <div className="flex">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white rounded-md p-2 inline-flex items-center justify-between text-lg"
          >
            Live Site{' '}
            <span className="pl-2 -translate-y-0.5">
              <FiExternalLink />
            </span>
          </a>

          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>

        <div className="">
          <h1 className="text-center">Technologies Used</h1>
          <div className="flex flex-wrap justify-center bg-black mr-2 rounded-md p-4 space-x-2">
            {icons}
          </div>
        </div>
      </div>
      <div className="border-4 border-black overflow-hidden rounded-md w-1/2 flex justify-center mx-2">
        <img src={img} alt={title}></img>
      </div>
    </div>
  );
};

export default Project;
