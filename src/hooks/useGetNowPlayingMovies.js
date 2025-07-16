import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_URL } from '../utils/Constants';
import { addNowPlayingMovies } from '../utils/Slices/movieSlice';
import { useEffect } from 'react';

// Fetching the data from TMDB API and Update the store with that data

const GetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovie);
  const getNowPlayingMovie = async () => {
    const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovie();
  }, []);
};

export default GetNowPlayingMovies;
