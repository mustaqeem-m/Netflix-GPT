import { useDispatch } from 'react-redux';
import { API_OPTIONS, POPULAR_URL } from '../utils/Constants';
import { addPopularMovies } from '../utils/Slices/movieSlice';
import { useEffect } from 'react';

// Fetching the data from TMDB API and Update the store with that data

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useGetPopularMovies;
