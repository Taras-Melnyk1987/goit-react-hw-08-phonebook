export const getIsLoggedIn = ({ phonebook }) => phonebook.auth.isLoggedIn;
export const getUserName = ({ phonebook }) => phonebook.auth.user.email;
export const getIsRefreshing = ({ phonebook }) => phonebook.auth.isRefreshing;
