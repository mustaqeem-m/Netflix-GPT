import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-48">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
        <MovieList
          title={'Family Entertainer'}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={'Horror'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Comedy'} movies={movies.nowPlayingMovies} />
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
