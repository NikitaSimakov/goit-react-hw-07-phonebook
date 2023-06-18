import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://648819000e2469c038fcf0e4.mockapi.io/api/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('contacts');
  console.log(data);
  return data;
});
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const data = await axios.delete(`contacts/${id}`);
    console.log(data);
    return data;
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const data = await axios.post('contacts', { name, number });
    console.log(data);
    return data;
  }
);
