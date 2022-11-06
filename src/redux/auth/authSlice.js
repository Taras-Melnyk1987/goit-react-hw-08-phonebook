import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refresh } from 'redux/auth/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logIn.rejected](state) {
      state.isLoggedIn = false;
    },

    [signUp.rejected](state) {
      state.isLoggedIn = false;
    },

    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [refresh.rejected](state, action) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
});
