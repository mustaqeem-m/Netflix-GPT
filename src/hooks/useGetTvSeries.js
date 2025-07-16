import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TV_SERIES_URL } from '../utils/Constants';
import { addTvSeries } from '../utils/Slices/movieSlice';
import { useEffect } from 'react';

// Fetching the data from TMDB API and Update the store with that data

const useGetTvSeries = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector((store) => store.movies?.tvSeries);
  const getTvSeries = async () => {
    const data = await fetch(TV_SERIES_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addTvSeries(json.results));
  };

  useEffect(() => {
    !tvSeries && getTvSeries();
  }, []);
};

export default useGetTvSeries;
