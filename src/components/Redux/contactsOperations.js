import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from 'components/contactsApi';
import axios from 'axios';

axios.defaults.baseURL = 'https://634d22c3f5d2cc648e9d6bb8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    const contacts = await baseUrl.fetchContacts();
    return contacts;
  }
);
