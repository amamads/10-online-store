import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// import { apiSlice } from "./apiSlice";
import userReducer from './userSlice';
import webModeReducer from "./webModeSlice";

const persistCongig = {
  key: "root",
  storage,
  whiteList: ["webMode"],
};

const rootReducer = combineReducers({
  webMode: webModeReducer,
  userSlice:userReducer,
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
