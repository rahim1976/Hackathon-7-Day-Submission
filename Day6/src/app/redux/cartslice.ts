import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      // Check if item already exists in cart
      const existingItem = state.find(item => item._id === action.payload._id);
      if (!existingItem) {
        state.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      return state.filter(item => item._id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;