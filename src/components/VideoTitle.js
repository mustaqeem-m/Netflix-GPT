import useGetMovieImage from '../hooks/useGetMovieImage';
import { FaInfoCircle } from 'react-icons/fa';

const VideoTitle = ({ title, overview, poster_path }) => {
  useGetMovieImage(title);
  return (
    <div className="w-screen aspect-video pt-[15%] px-[20] absolute text-white/90 md:text-white bg-gradient-to-r from-black/80 md:from-black">
      <h1 className="pt-10 md:pt-24 px-12 text-2xl md:text-5xl">{title}</h1>
      <p className="hidden md:inline-block pt-5 w-1/4 px-12 ">{overview}</p>

      <div className="flex">
        <button className="ml-12 px-4 md:px-8 py-2 md:py-4 rounded-lg mt-7 bg-white text-black font-bold text-1xl md:text-1.5xl cursor-pointer hover:bg-gray-300 transition">
          ▶︎ Play
        </button>
        <button className="ml-6 px-8 py-3 md:py-4 rounded-lg mt-7 bg-gray-700 bg-opacity-70 text-base md:text-white font-bold text-lg cursor-pointer hover:bg-opacity-90 transition duration-300 ease-in-outm flex">
          <FaInfoCircle className="text-2xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
