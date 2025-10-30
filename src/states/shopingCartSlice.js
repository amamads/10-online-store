import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
  showPopup:false,
}

const shopingCartSlice = createSlice({
  name: 'shopingCartSlice',
  // initialState: [],
  initialState,
  reducers: {
    addProductToCart(state, action) {
      if (state.cartItems.find(item => item.id === action.payload.id)) return;
      state.cartItems.push({ ...action.payload, count: 1 })
      // console.log(JSON.parse(JSON.stringify(state)));
    },
    removeProduct(state, action) {
       state.cartItems.filter(item => item.id !== action.payload.id);
    },
    increasProductCount(state, action) {
      state.cartItems.find(
        (product) => product.id === action.payload.id
      ).count += 1
      },
      decreasProductCount(state, action) {
      state.cartItems.find(
        (product) => product.id === action.payload.id
      ).count -= 1
    },
    toggleShowPopup(state){
      state.showPopup= !state.showPopup;
    }
  }
});

export const {
   addProductToCart ,
   removeProduct,
   increasProductCount,
   decreasProductCount,
   toggleShowPopup
  } = shopingCartSlice.actions;

  
export default shopingCartSlice.reducer