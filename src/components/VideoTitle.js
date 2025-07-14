import useGetMovieImage from '../hooks/useGetMovieImage';
import { FaInfoCircle } from 'react-icons/fa';

const VideoTitle = ({ title, overview, poster_path }) => {
  useGetMovieImage(title);
  return (
    <div className="w-screen aspect-video pt-[15%] px-[20] absolute  text-white bg-gradient-to-r from-black">
      <h1 className="pt-24 px-12 text-5xl">{title}</h1>
      <p className="pt-5 w-1/4 px-12 ">{overview}</p>

      <div className="flex">
        <button className="ml-12 px-8 py-4 rounded-lg mt-7 bg-white text-black font-bold text-1.5xl cursor-pointer hover:bg-gray-300 transition">
          ▶︎ Play
        </button>
        <button className="ml-6 px-8 py-4 rounded-lg mt-7 bg-gray-700 bg-opacity-70 text-white font-bold text-lg cursor-pointer hover:bg-opacity-90 transition duration-300 ease-in-outm flex">
          <FaInfoCircle className="text-2xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
