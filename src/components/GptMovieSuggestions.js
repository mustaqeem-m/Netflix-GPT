import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { searchMovieList, searchMovieNames } = useSelector(
    (store) => store.gpt
  );

  console.log('movieNames:', searchMovieNames);
  console.log('movieList:', searchMovieList);

  if (!searchMovieNames || searchMovieNames.length === 0) {
    return (
      <div className="text-white p-4 text-center">
        No GPT movie suggestions yet. Try a search above.
      </div>
    );
  }

  return searchMovieList.length === 0 ? (
    <div className="text-white text-center"> NO RESULTS FOUND!</div>
  ) : (
    <div className="p-4 m-4 bg-black/10 backdrop-blur-lg rounded-2xl border border-black/20">
      {searchMovieNames.map((searchMovieName, index) => (
        <MovieList
          key={searchMovieName + index}
          title={searchMovieName}
          movies={searchMovieList[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
