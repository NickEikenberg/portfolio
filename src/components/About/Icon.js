import React from 'react';

const Icon = ({ icon, name }) => {
  return (
    <div className="flex justify-start items-center space-x-2 w-1/4 m-1">
      <div className="text-2xl">{icon}</div>
      <div className="text-sm">{name}</div>
    </div>
  );
};

export default Icon;
