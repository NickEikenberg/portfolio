import React from 'react';
import { SiTailwindcss } from 'react-icons/si';

const TailwindIcon = () => {
  return (
    <div className="text-5xl text-icon-tailwind w-1/4 space-y-1">
      <SiTailwindcss />
      <h5 className="text-xs -translate-x-2">TailwindCSS</h5>
    </div>
  );
};

export default TailwindIcon;
