import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from 'redux/auth/authSlice';
import { contacts, isLoading, error } from 'redux/contacts/contactsReducers';
import { filterSlice } from 'redux/contacts/filterSlice';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const phonebookReducer = combineReducers({
  auth: authPersistedReducer,
  contacts,
  isLoading,
  error,
  filter: filterSlice.reducer,
});
