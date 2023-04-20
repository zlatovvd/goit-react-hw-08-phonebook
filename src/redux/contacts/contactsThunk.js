import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi, token } from 'http/http';
import { selectAuthToken } from '../auth/authSelectors';

//axios.defaults.baseURL = 'https://6435ba22537112453fde3b62.mockapi.io/';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const stateToken = selectAuthToken(thunkAPI.getState());
      token.set(stateToken.token);
      const response = await fetchApi.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await fetchApi.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await fetchApi.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
