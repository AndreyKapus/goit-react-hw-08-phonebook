import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts } from './contactsOperations';
import { addItem, deleteItem } from './contactsOperations';

const persistConfig = {
  key: 'Contacts',
  storage,
  whitelist: ['items'],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filter: '',
  },

  reducers: {
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },

  // Все конаткты-------------

  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
      };
    },

    // Добавить контакт---------------

    [addItem.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [addItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
      };
    },

    // Удалить контакт----------------

    [deleteItem.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [deleteItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    },
  },
});

export const { filterItems } = contactsSlice.actions;

export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { filterContacts } = contactsSlice.actions;
