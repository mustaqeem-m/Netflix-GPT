import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggetsions';
import { BG_IMAGE } from '../utils/Constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMAGE} alt="bg-image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
