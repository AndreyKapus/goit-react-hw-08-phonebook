import axios from 'axios';

export const baseUrl = 'https://6369042115219b84960d01a5.mockapi.io';

export const contactsApi = axios.create({
  baseURL: baseUrl,
});

export const getContacts = async () => {
  const responce = await contactsApi.get('/contacts');
  return responce.data;
};

export const addContact = async contact => {
  const { responce } = await contactsApi.post('/contacts', contact);
  return responce;
};

export const deleteContact = async id => {
  const { data } = await contactsApi.delete(`/contacts/${id}`);
  return data;
};
