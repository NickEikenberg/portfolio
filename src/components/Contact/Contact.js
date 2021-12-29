import React from 'react';
import Title from '../Title';
import { AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="py-10 px-20">
      <Title title={'Contact'} />
      <p className="text-lg">
        The easiest way to reach me is by just shooting me an email! Feel free
        to connect with me on LinkedIn and GitHub as well.
      </p>
      <div className="flex text-5xl justify-center space-x-4">
        <a
          href="mailto:nickeikenberg95@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail />
        </a>
        <a
          href="https://www.linkedin.com/in/nick-eikenberg/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/NickEikenberg"
          target="_blank"
          rel="noreferrer"
          className="text-red-500"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;
