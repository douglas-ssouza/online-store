import {createSlice, configureStore} from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    quant: 0,
    products: [],
    total: 0,
  },
  reducers: {
    addItem: (state) => {
      state.quant += 1;
    },
    removeItem: (state) => {
      state.quant -= state.quant === 0 ? 0 : 1;
    },
  },
});

const store = configureStore({
  reducer: productsSlice.reducer,
});

export default store;
export const {addItem, removeItem} = productsSlice.actions;
