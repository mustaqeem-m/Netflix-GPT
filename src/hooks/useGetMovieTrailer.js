import { API_OPTIONS } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/Slices/movieSlice';
import { useCallback, useEffect } from 'react';

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // fetching movie video using TMDB
  const getMovieTrailer = useCallback(async () => {
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
  }, [movieId, dispatch]);
  // useEffect(() => {
  //   !trailerVideo && getMovieTrailer();
  // });
  useEffect(() => {
    if (movieId && !trailerVideo) getMovieTrailer();
  }, [movieId, trailerVideo, getMovieTrailer]);
};

export default useGetMovieTrailer;
