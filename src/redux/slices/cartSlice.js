import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {

    // ================= ADD TO CART =================

    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        item => item.id === product.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // ================= INCREASE =================

    increaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.items.find(
        product => product.id === productId,
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // ================= DECREASE =================

    decreaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.items.find(
        product => product.id === productId,
      );

      if (!item) {
        return;
      }

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          product => product.id !== productId,
        );
      }
    },

    // ================= REMOVE =================

    removeFromCart: (state, action) => {
      const productId = action.payload;

      state.items = state.items.filter(
        product => product.id !== productId,
      );
    },

    // ================= CLEAR CART =================

    clearCart: state => {
      state.items = [];
    },

  },
});

// ================= EXPORT ACTIONS =================

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// ================= EXPORT REDUCER =================

export default cartSlice.reducer;