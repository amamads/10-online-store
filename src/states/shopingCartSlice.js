import { createSlice } from '@reduxjs/toolkit'
// import { cancelProduct, sellProduct } from './productsSlice';

// const initialState = {cart:[{name:'ali'}]};

const shopingCartSlice = createSlice({
  name: 'shopingCartSlice',
  initialState: [],
  reducers: {
    addProductToCart(state, action) {
      // console.log(JSON.parse(JSON.stringify(
      //   state.find(item => item.id === action.payload.id) || 22
      // )));

      if (state.find(item => item.id === action.payload.id)) return;
      state.push({ ...action.payload, count: 1 })
      console.log(JSON.parse(JSON.stringify(state)));
    },
    removeProduct(state, action) {
      // const currentProduct = state.find(
      //   (product) => product.id === action.payload.id
      // );
      // currentProduct.isSell = false;
      // currentProduct.count = 0;
      return state.filter(item => item.id !== action.payload.id);
    },
    increasProductCount(state, action) {
      state.find(
        (product) => product.id === action.payload.id
      ).count += 1
      // const currentProduct = state.find(
        //   (product) => product.id === action.payload.id
        // );
        // currentProduct.count += 1;
      },
      decreasProductCount(state, action) {
      state.find(
        (product) => product.id === action.payload.id
      ).count -= 1
      // const currentProduct = state.find(
      //   (product) => product.id === action.payload.id
      // );
      // currentProduct.count -= 1;
    },
  }
  //#region
  // initialState,
  // extraReducers: builder => {
  //   builder.addCase(sellProduct,
  //     (state, action) => {
  //       // console.log(JSON.parse(JSON.stringify(state)));
  //       state.push(action.payload)

  //     }
  //   )
  //   builder.addCase(cancelProduct,
  //     (state, action) => {
  //       // console.log(action.payload);
  //       // console.log(JSON.parse(JSON.stringify(state)));
  //       return state.filter(item => item.id !== action.payload.id)

  //     }
  //   )
  // }
  //#endregion
});

export const {
   addProductToCart ,
   removeProduct,
   increasProductCount,
   decreasProductCount
  } = shopingCartSlice.actions;
export default shopingCartSlice.reducer