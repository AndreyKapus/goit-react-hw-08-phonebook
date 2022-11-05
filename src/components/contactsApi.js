import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export const baseUrl = 'https://63640ed18a3337d9a2f052f2.mockapi.io/contacts/';

export async function fetchContacts() {
  const { data } = await axios.get(
    'https://63640ed18a3337d9a2f052f2.mockapi.io/contacts/'
  );
  return data;
}
