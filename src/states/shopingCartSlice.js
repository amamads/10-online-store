import { createSlice } from '@reduxjs/toolkit'
import { cancelProduct } from './productsSlice';

const initialState = { cartItems: [] };

const shopingCartSlice = createSlice({
  name: 'shopingCartSlice',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.cartItems.push(action.payload)
    }
  },
  extraReducers: builder => {
    builder.addCase(cancelProduct, 
      (state,action)=>{
        
      }
    )
  }
});

export const { addProduct } = shopingCartSlice.actions;
export default shopingCartSlice.reducer