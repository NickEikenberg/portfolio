import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="text-5xl relative my-20 flex items-center justify-between">
      <h1 className="text-red-500">{title}</h1>
      <h1 className="text-blue-700 absolute top-0 translate-x-1 opacity-50">
        {title}
      </h1>
      <div className="w-2/3 border border-black opacity-20"></div>
    </div>
  );
};

export default Title;
