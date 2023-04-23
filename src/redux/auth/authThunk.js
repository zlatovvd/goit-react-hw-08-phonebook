import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi, token } from 'http/http';

export const authLoginThunk = createAsyncThunk('userLogin', async values => {
  const { data } = await fetchApi.post('/users/login', values);
  token.set(data.token);
  return data;
});

export const authLogoutThunk = createAsyncThunk(
  'userLogout',
  async authToken => {
    const { data } = await fetchApi.post('/users/logout', authToken);
    return data;
  }
);
