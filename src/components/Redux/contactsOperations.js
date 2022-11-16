import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getContacts } from '../contactsApi';
import { addContact } from 'components/contactsApi';
import { deleteContact } from '../contactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const result = await axios.post('/users/signup', credentials);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await axios.post('/users/login', credentials);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const result = await axios.post('/users/logout', credentials);
      clearAuthHeader();
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('please, log in!');
    setAuthHeader(token);
    try {
      const result = await axios.get('/users/current');
      return result.data;
    } catch (error) {
      // const result = await axios.post('/users/current', credentials);
      // clearAuthHeader();
      // return result.data;
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const getNewContacts = createAsyncThunk(
//   'auth/getcontacts',
//   async (credentials, thunkApi) => {
//     try {
//       const result = await axios.get('/contacts', credentials);
//       setAuthHeader(result.data.token);
//       return result.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// ---------------------------- contacts------------------------------

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await getContacts();

//       return contacts;
//     } catch (error) {
//       return;
//     }
//   }
// );

export const addItem = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', contact);
      const result = res.data;
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addItem = createAsyncThunk(
//   'contact/addItem',
//   async (contact, { rejectWithValue }) => {
//     try {
//       await addContact(contact);
//       const contactsApi = getContacts();
//       toast.success('We add your contact');

//       return contactsApi;
//     } catch {
//       toast.error('Something went wrong:(');
//       return rejectWithValue;
//     }
//   }
// );

// export const deleteItem = createAsyncThunk(
//   'contact/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteContact(id);
//       const contactsApi = getContacts();
//       toast.success('Contact deleted');
//       return contactsApi;
//     } catch {
//       toast.error('Something went wrong:(');
//       return rejectWithValue;
//     }
//   }
// );
