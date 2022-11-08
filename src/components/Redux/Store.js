import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({}),

  devTools: process.env.NODE_ENV === 'development',
});
