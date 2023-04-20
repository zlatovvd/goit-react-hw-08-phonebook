import { authLoginThunk, authLogoutThunk } from './authThunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
    builder.addCase(authLoginThunk.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(authLoginThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
      state.isLoggedIn = true;
    });
    builder.addCase(authLoginThunk.rejected, state => {
      state.status = 'error';
    });
    builder.addCase(authLogoutThunk.pending, state => {
      state.status = 'loadin';
    });
    builder.addCase(authLogoutThunk.fulfilled, (state, {payload}) => {
      state.data = payload;
      state.status = 'success';
      state.isLoggedIn = false;
    } );
    builder.addCase(authLogoutThunk.rejected, state => {
      state.status = 'error';
    })
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['data'],
}

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
