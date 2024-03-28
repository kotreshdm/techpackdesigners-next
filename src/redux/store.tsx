"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import themeReducer from "./theme/themeSlice";
import postReducer from "./posts/postSlice";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  posts: postReducer,
});
const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
