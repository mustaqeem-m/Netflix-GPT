import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions.js';
import { BG_IMAGE } from '../utils/Constants';

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={BG_IMAGE}
          alt="bg-image"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
