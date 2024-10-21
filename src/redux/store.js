import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice.js";
// import authReducer from "./auth/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };
export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    camper: camperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);