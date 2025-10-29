import { createSlice } from '@reduxjs/toolkit'

const shopingCartSlice = createSlice({
  name: 'shopingCartSlice',
  initialState: [],
  reducers: {
    addProductToCart(state, action) {
      if (state.find(item => item.id === action.payload.id)) return;
      state.push({ ...action.payload, count: 1 })
      // console.log(JSON.parse(JSON.stringify(state)));
    },
    removeProduct(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
    increasProductCount(state, action) {
      state.find(
        (product) => product.id === action.payload.id
      ).count += 1
      },
      decreasProductCount(state, action) {
      state.find(
        (product) => product.id === action.payload.id
      ).count -= 1
    },
  }
});

export const {
   addProductToCart ,
   removeProduct,
   increasProductCount,
   decreasProductCount
  } = shopingCartSlice.actions;
export default shopingCartSlice.reducer