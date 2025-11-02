import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { createTransform, persistReducer, persistStore } from "redux-persist";

import userReducer from './userSlice';
import webModeReducer from "./webModeSlice";
import productsReducer from './productsSlice';
import shopingCartReducer from './shopingCartSlice'
import dashboardReducer from './dashboardSlice'


const shopingCartTrasnform = createTransform(
  (inBoundState, key) => {
    const { showPopup, ...rest } = inBoundState;
    return rest;
  },
  (outBoundeState, key) => outBoundeState,
  { whitelist: ['shopingCart'] }
)
const dashboardTrasnform = createTransform(
  (inBoundState, key) => {
    // const { dashboardTest, ...rest } = inBoundState;
    return
  },
  (outBoundeState, key) => outBoundeState,
  { whitelist: ['dashboard'] }
)

const persistCongig = {
  key: "root",
  storage,
  blacklist: ['products'],
  transforms: [shopingCartTrasnform, dashboardTrasnform],
};

const rootReducer = combineReducers({
  webMode: webModeReducer,
  usersSlice: userReducer,
  products: productsReducer,
  shopingCart: shopingCartReducer,
  dashboard: dashboardReducer
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
