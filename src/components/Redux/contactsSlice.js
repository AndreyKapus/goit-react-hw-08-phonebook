import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';
import { addItem, deleteItem } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
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
        items: [...state.items, action.payload],
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
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );

      state.items.splice(index, 1);
      state.isLoading = false;
    },
  },
});

export const { filterItems } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;
