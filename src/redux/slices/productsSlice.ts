import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import Product from '../../types/Product';

interface ProductsState {
  quant: number;
  cart: Product[] | [];
  products: Product[] | [];
  total: number;
}

const initialState: ProductsState = {
  quant: 0,
  cart: [],
  products: [],
  total: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItem: (state) => {
      state.quant += 1;
    },
    removeItem: (state) => {
      state.quant -= state.quant === 0 ? 0 : 1;
    },
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const {addItem, removeItem, getProducts} = productsSlice.actions;
export default productsSlice.reducer;
