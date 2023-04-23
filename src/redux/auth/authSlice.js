import { authLoginThunk, authLogoutThunk } from './authThunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts } from 'redux/contacts/contactsThunk';

const { createSlice } = require('@reduxjs/toolkit');

const authInitialState = {
  status: 'idle',
  isLoggedIn: false,
  data: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authLoginThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = 'success';
        state.isLoggedIn = true;
      })
      .addCase(authLoginThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(authLogoutThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(authLogoutThunk.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = 'success';
        state.isLoggedIn = false;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.status = 'error';
      })
      .addCase(fetchContacts.rejected, () => authInitialState);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['data'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
