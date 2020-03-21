import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = 'jwtToken-token';


export const isLoggedIn = () => {
  return !!localStorage.getItem(JWT_TOKEN_NAME);

  if (!token) return false;

  const decodedToken = jwt.decode(token);
  const expirationTime = decodedToken.exp * 1000;
  const isExpired = Date.now() - expirationTime > 0;

  return !isExpired;
};

export const setToken = (token) => {
  localStorage.setItem(JWT_TOKEN_NAME, token);
};

export const getToken = () => {
  localStorage.getItem(JWT_TOKEN_NAME);
};

export const removeToken = () => {
  localStorage.removeItem(JWT_TOKEN_NAME);
};