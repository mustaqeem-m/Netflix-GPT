import { configureStore } from '@reduxjs/toolkit';
import UserReducers from './Slices/UserSlice';
import movieReducer from './Slices/movieSlice';
import gptReducer from '../utils/Slices/gptSlice';
import configReducer from '../utils/Slices/configSlice';

const AppStore = configureStore({
  reducer: {
    user: UserReducers,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default AppStore;
