import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-0 md:-mt-48">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
        <MovieList title={'Popular'} movies={movies.popularMovies} />
        <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
        <MovieList title={'TV Series'} movies={movies.tvSeries} />
        {/**
         * Movielist- popularMovies
         * movieCards * n cards
         * MovieList - trending
         * MovieList - Family Entretainer
         * MovieList - Horror
         */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
