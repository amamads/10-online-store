import { createSlice } from '@reduxjs/toolkit'
import { cancelProduct, sellProduct } from './productsSlice';

// const initialState = {cart:[{name:'ali'}]};

const shopingCartSlice = createSlice({
  name: 'shopingCartSlice',
  initialState: [],
  // initialState,
  extraReducers: builder => {
    builder.addCase(sellProduct,
      (state, action) => {
        // console.log(JSON.parse(JSON.stringify(state)));
        state.push(action.payload)
        
      }
    )
    builder.addCase(cancelProduct,
      (state, action) => {
        // console.log(action.payload);
        // console.log(JSON.parse(JSON.stringify(state)));
        return state.filter(item => item.id !== action.payload.id)

      }
    )
  }
});

// export const { addProduct } = shopingCartSlice.actions;
export default shopingCartSlice.reducer