import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, POPULAR_URL } from '../utils/Constants';
import { addPopularMovies } from '../utils/Slices/movieSlice';
import { useCallback, useEffect } from 'react';

// Fetching the data from TMDB API and Update the store with that data

const useGetPopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = useCallback(async () => {
    const data = await fetch(POPULAR_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [getPopularMovies, popularMovies]);
};

export default useGetPopularMovies;
