import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/Constants';

const VideoBackGround = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  // fetching movie video using TMDB
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    let trailer = json.results.find(
      (video) => video.name === 'Official Trailer'
    );

    //fallback
    if (!trailer && json.results.length > 0) {
      trailer = json.results[0];
    }

    if (trailer) {
      setTrailerKey(trailer.key);
    }
    console.log(trailer);
  };
  useEffect(() => {
    if (movieId) getMovieTrailer();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
