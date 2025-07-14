import React from 'react';
import { POSTER_IMG_URL } from '../utils/Constants';

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="min-w-[150px] transition-transform duration-300 transform hover:scale-105 flex-shrink-0">
      <img
        className="rounded-lg w-full h-[220px] object-cover"
        src={POSTER_IMG_URL + posterPath}
        alt={`${title} poster`}
      />
    </div>
  );
};

export default MovieCard;
