import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TOP_RATED_URL } from '../utils/Constants';
import { addTopRatedMovies } from '../utils/Slices/movieSlice';
import { useCallback, useEffect } from 'react';

// Fetching the data from TMDB API and Update the store with that data

const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const getTopRatedMovies = useCallback(async () => {
    const data = await fetch(TOP_RATED_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addTopRatedMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, [getTopRatedMovies, topRatedMovies]);
};

export default useGetTopRatedMovies;
