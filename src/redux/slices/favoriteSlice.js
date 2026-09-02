import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',

  initialState,

  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(
        item => item.id === product.id,
      );

      if (existingProduct) {
        state.items = state.items.filter(
          item => item.id !== product.id,
        );
      } else {
        state.items.push(product);
      }
    },

    clearFavorites: state => {
      state.items = [];
    },
  },
});

export const {
  toggleFavorite,
  clearFavorites,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;