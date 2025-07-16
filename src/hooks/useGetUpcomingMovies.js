import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, UPCOMING_URL } from '../utils/Constants';
import { addUpcomingMovies } from '../utils/Slices/movieSlice';
import { useEffect } from 'react';

// Fetching the data from TMDB API and Update the store with that data

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector(
    (store) => store.movies?.getUpcomingMovies
  );
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
  }, []);
};

export default useGetUpcomingMovies;
