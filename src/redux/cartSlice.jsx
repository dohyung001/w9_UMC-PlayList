import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
  items: cartItems.map((e) => ({ ...e, quantity: 1 })),
  countSum: 0,
  priceSum: 0,
};

export const cartSlice = createSlice({
  name: 'cartSliceFunction',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.items.find(e => e.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(e => e.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(e => e.id !== action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(e => e.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.countSum = 0;
      state.priceSum = 0;
    },
    calculateTotals: (state) => {
      state.countSum = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.priceSum = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    }
  }
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;