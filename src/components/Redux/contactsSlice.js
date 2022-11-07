import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts } from './contactsOperations';
import { addItem, deleteItem } from './contactsOperations';

import axios from 'axios';

const persistConfig = {
  key: 'Contacts',
  storage,
  whitelist: ['items'],
};

const init = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filter: '',
  },
  // name: 'contacts',
  // initialState: {
  //   items: init,
  //   filter: '',
  // },

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
      };
    },

    // reducers: {
    //   createContact(state, { payload }) {
    //     state.items.push(payload);
    //   },

    //   deleteContact(state, { payload }) {
    //     state.items = state.items.filter(item => item.id !== payload);
    //   },

    // filterContacts(state, { payload }) {
    //   state.filter = payload;
    // },
    // },
  },
});

export const { filterItems } = contactsSlice.actions;

export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { filterContacts } = contactsSlice.actions;
