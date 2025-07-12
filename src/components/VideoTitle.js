import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="">
      <h1 className="pt-44 px-12 text-5xl">{title}</h1>
      <p className="pt-5 w-1/4 px-12 ">{overview}</p>

      <div>
        <button className="ml-12 px-8 py-4 rounded-lg mt-7 bg-gray-400 font-black font-bold text-1.5xl cursor-pointer bg-opacity-40">
          ▶ Play
        </button>
        <button className="ml-3 px-8 py-4 rounded-lg mt-7 bg-gray-400 font-black font-bold text-1.5xl cursor-pointer bg-opacity-40">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
