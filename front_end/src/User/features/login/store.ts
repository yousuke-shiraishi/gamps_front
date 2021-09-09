import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
