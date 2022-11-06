import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Authorization

export const signUpUser = async body => {
  const { data } = await axios.post('users/signup', body);
  token.set(data.token);
  return data;
};

export const logInUser = async body => {
  const { data } = await axios.post('users/login', body);
  token.set(data.token);
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
};

export const refreshCurrenthUser = async persistedToken => {
  if (!persistedToken) {
    throw Error(console.log('need to auth!!!'));
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return error;
  }
};

// Contacts

export const fetchAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};
export const deleteContactById = async id => {
  await axios.delete(`/contacts/${id}`);
};
