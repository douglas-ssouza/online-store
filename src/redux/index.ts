import {configureStore} from '@reduxjs/toolkit';

import productsSlice from './slices/productsSlice';

const store = configureStore({
  reducer: productsSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
