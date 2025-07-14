import Header from './Header';
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies.js';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies.js';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies.js';
import useGetTvSeries from '../hooks/useGetTvSeries.js';
const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();
  useGetTopRatedMovies();
  useGetTvSeries();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
