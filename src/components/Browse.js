import React, { useEffect } from 'react';
import Header from './Header';
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';

import { useDispatch } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useGetNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
