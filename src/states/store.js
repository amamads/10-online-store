import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import userReducer from './userSlice';
import webModeReducer from "./webModeSlice";
import productsReducer from './productsSlice';
import shopingCartReducer from './shopingCartSlice'

const persistCongig = {
  key: "root",
  storage,
  blacklist: ['products']
  // blacklist: ['products','shopingCart']
};

const rootReducer = combineReducers({
  webMode: webModeReducer,
  userSlice:userReducer,
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
