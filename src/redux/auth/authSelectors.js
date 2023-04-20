export const selectAuthStatus = state => state.auth.status;

export const selectAuthToken = state => state.auth.data;

export const selectAuthUser = state => state.auth.data.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;