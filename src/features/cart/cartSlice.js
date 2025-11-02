import { createSlice } from '@reduxjs/toolkit'

function calculateSumPrices(state) {
  state.sumPrices = state.cartItems
    .map(item => ({ price: item.price, count: item.count }))
    .reduce((totoal, current) => {
      return totoal += current.price * current.count
    }, 0)
    .toFixed(2)
}


const initialState = {
  cartItems: [],
  showPopup: false,
  sumPrices: 0
}

const cartSlice = createSlice({
  name: 'cartSlice',
  // initialState: [],
  initialState,
  reducers: {
    addProductToCart(state, action) {
      if (state.cartItems.find(item => item.id === action.payload.id)) return;
      state.cartItems.push({ ...action.payload, count: 1 })
      // console.log(JSON.parse(JSON.stringify(state)));
      calculateSumPrices(state);
    },
    removeProduct(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);

      calculateSumPrices(state);
    },
    increasProductCount(state, action) {
      state.cartItems.find(
        (product) => product.id === action.payload.id
      ).count += 1
      calculateSumPrices(state);
    },
    decreasProductCount(state, action) {
      state.cartItems.find(
        (product) => product.id === action.payload.id
      ).count -= 1
      calculateSumPrices(state);
    },
    toggleShowPopup(state) {
      state.showPopup = !state.showPopup;
    }
  }
});

export const selectCartItems = s => s.shopingCart.cartItems
export const selectShowPopup = s => s.shopingCart.showPopup
export const selectSumPrices = s => s.shopingCart.sumPrices
export const selectCartItemById =
  (state, itemId) => state.shopingCart.cartItems.find(item => item.id === itemId)


export const {
  addProductToCart,
  removeProduct,
  increasProductCount,
  decreasProductCount,
  toggleShowPopup
} = cartSlice.actions;


export default cartSlice.reducer