import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    searchMovieNames: null,
    searchMovieList: null,
  },
  reducers: {
    toggleGptSearchview: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovieList: (state, action) => {
      const { movieNames, movieList } = action.payload;
      state.searchMovieNames = movieNames;
      state.searchMovieList = movieList;
    },
  },
});

export const { toggleGptSearchview, addSearchMovieList } = gptSlice.actions;

export default gptSlice.reducer;
