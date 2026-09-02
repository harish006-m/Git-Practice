import {createSlice} from '@reduxjs/toolkit';
import {products} from '../../data/products';

const initialState = {
  items: products,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',

  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;