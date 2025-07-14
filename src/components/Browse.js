import Header from './Header';
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies.js';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies.js';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies.js';
import useGetTvSeries from '../hooks/useGetTvSeries.js';
import GptSearch from './GptSearchPage.js';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopRatedMovies();
  useGetTvSeries();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
