import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { createTransform, persistReducer, persistStore } from "redux-persist";

import userReducer from './userSlice';
import webModeReducer from "./webModeSlice";
import productsReducer from './productsSlice';
import shopingCartReducer from './shopingCartSlice'


const shopingCartTrasnform = createTransform(
  (inBoundState, key) => {
    // return inBoundState
    const { showPopup, ...rest } = inBoundState;
    return rest;
  },
  (outBoundeState, key) => outBoundeState,
  { whitelist: ['shopingCart'] }
)

const persistCongig = {
  key: "root",
  storage,
  blacklist: ['products'],
  transforms: [shopingCartTrasnform],
};

const rootReducer = combineReducers({
  webMode: webModeReducer,
  usersSlice: userReducer,
  products: productsReducer,
  shopingCart: shopingCartReducer
});

const persistedReducer = persistReducer(persistCongig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ],
      },
    }),
});

export const persistor = persistStore(store);
