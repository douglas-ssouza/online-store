import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    quant: 0,
    cart: [],
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

export const {addItem, removeItem} = productsSlice.actions;
export default productsSlice.reducer;
