import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';

// export const baseUrl = 'https://6362c45937f2167d6f6c9777.mockapi.io';

export const baseUrl = 'https://6362c45937f2167d6f6c9777.mockapi.io';

export const contactsApi = axios.create({
  baseURL: baseUrl,
});

export const getContacts = async () => {
  const responce = await contactsApi.get('/contacts');
  return responce.data;
};

export const addContact = async contact => {
  const responce = await contactsApi.post('', contact);
  return responce;
};
