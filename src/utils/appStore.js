import { configureStore } from '@reduxjs/toolkit';
import UserReducers from './Slices/UserSlice';
import movieReducer from './Slices/movieSlice';

const AppStore = configureStore({
  reducer: {
    user: UserReducers,
    movies: movieReducer,
  },
});

export default AppStore;
