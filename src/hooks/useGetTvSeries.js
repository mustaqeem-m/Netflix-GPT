import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TV_SERIES_URL } from '../utils/Constants';
import { addTvSeries } from '../utils/Slices/movieSlice';
import { useCallback, useEffect } from 'react';

// Fetching the data from TMDB API and Update the store with that data

const useGetTvSeries = () => {
  const dispatch = useDispatch();
  const tvSeries = useSelector((store) => store.movies?.tvSeries);
  const getTvSeries = useCallback(async () => {
    const data = await fetch(TV_SERIES_URL, API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addTvSeries(json.results));
  }, [dispatch]);

  useEffect(() => {
    !tvSeries && getTvSeries();
  }, [getTvSeries, tvSeries]);
};

export default useGetTvSeries;
