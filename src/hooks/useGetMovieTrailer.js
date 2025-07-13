import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/Slices/movieSlice';
import { useEffect } from 'react';

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
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
      dispatch(addTrailerVideo(trailer));
      // console.log(trailer);
    }
  };
  useEffect(() => {
    if (movieId) getMovieTrailer();
  }, [movieId, dispatch]);
};

export default useGetMovieTrailer;
