import { useDispatch } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_URL } from '../utils/Constants';
import { addNowPlayingMovies } from '../utils/Slices/movieSlice';
import { useEffect } from 'react';

const GetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default GetNowPlayingMovies;
