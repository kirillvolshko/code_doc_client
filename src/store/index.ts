"use client";
import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { authService } from "./auth/authService";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./auth/authSlice";
import { projectService } from "./project/projectService";
import { documentService } from "./documents/documentService";
import { commentService } from "./comments/commentService";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  [authService.reducerPath]: authService.reducer,
  [projectService.reducerPath]: projectService.reducer,
  [documentService.reducerPath]: documentService.reducer,
  [commentService.reducerPath]: commentService.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }).concat(
        authService.middleware as Middleware,
        projectService.middleware as Middleware,
        documentService.middleware as Middleware,
        commentService.middleware as Middleware
      ),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
