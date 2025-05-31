import { configureStore } from '@reduxjs/toolkit';
import yourReducer from '../features/feature/featureSlice';

export const store = configureStore({
  reducer: {
    sliceName: yourReducer,
  },
});