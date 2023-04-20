import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi, token } from 'http/http';

export const authLoginThunk = createAsyncThunk('userLogin', async values => {
  const { data } = await fetchApi.post('/users/login', values);
  console.log('login Ok');
  console.log(data.token);
  token.set(data.token);
  return data;
});

export const authLogoutThunk = createAsyncThunk(
  'userLogout',
  async authToken => {
    const { data } = await fetchApi.post('/users/logout', authToken);
    console.log('logout', data);
    return data;
  }
);
