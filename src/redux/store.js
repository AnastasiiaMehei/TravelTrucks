import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import filtersReducer from './filters/slice';
import { campersReducer } from './campers/slice';
const campersPersistConfig = {
    key: 'campers',
    storage: storage,
    whitelist: ['details', 'filters'],
  };
  

export const store = configureStore({
    reducer: {
      campers: persistReducer(campersPersistConfig, campersReducer),
      filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);
  