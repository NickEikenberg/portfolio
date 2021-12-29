import React from 'react';

const Resume = ({ hideResume }) => {
  return (
    <div
      className="flex justify-center absolute inset-0 z-10 bg-black bg-opacity-40 m-10 rounded-md"
      onClick={() => hideResume(true)}
    >
      <div className="bg-black p-2 m-5 rounded-md">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vT06CIempxKjqGbCCY3sLHB3Nt8Z4y57maT28Be-RGRGHVqQ8kO2jynCg9JrV7uwAIOLPH3yhT33wn2/pub?embedded=true"
          title="resume"
          height={700}
          width={500}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
