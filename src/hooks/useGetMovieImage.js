import { API_OPTIONS } from '../utils/Constants';
import { useEffect } from 'react';

const useGetMovieImage = (title) => {
  const getMovieImage = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&language=en-US`,
      API_OPTIONS
    );
    const json = await res.json();
    const movie = json.results[0]; // pick first match
    const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    // console.log(imageUrl); // use this URL in your <img> or <div background>
  };
  useEffect(() => {
    if (title) getMovieImage();
  }, [title]);
};

export default useGetMovieImage;
