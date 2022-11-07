import { createAsyncThunk, useEffect } from '@reduxjs/toolkit';
import { baseUrl } from 'components/contactsApi';
import { getContacts } from '../contactsApi';
import axios from 'axios';
import { addContact } from 'components/contactsApi';
import { deleteContact } from '../contactsApi';

// axios.defaults.baseURL = 'https://63640ed18a3337d9a2f052f2.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return alert('alert');
    }
  }
);

export const addItem = createAsyncThunk(
  'contact/addItem',
  async (contact, { rejectWithValue }) => {
    try {
      await addContact(contact);
      const contactsApi = getContacts();
      return contactsApi;
    } catch {
      return rejectWithValue;
    }
  }
);

export const deleteItem = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      const contactsApi = getContacts();
      return contactsApi;
    } catch {
      return rejectWithValue;
    }
  }
);
