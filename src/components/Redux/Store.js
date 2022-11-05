import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactReducer } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: [(items: []), (isLoading: false), (error: null)],
//     filter: '',
//   },

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
