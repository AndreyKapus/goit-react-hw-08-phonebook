import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from '../contactsApi';
import { addContact } from 'components/contactsApi';
import { deleteContact } from '../contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.success('We add your contact');
      return contactsApi;
    } catch {
      toast.error('Something went wrong:(');
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
      toast.success('Contact deleted');
      return contactsApi;
    } catch {
      toast.error('Something went wrong:(');
      return rejectWithValue;
    }
  }
);
