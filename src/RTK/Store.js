import { configureStore } from '@reduxjs/toolkit';
import { movieSlice }from './Slice';

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});


