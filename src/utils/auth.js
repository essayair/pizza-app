import jwt from 'jsonwebtoken';
const JWT_TOKEN_NAME = 'jwtToken-token';


// export const isLoggedIn = () => {
//   return !!localStorage.getItem(JWT_TOKEN_NAME);
// };


// export const storeToken = token => {localStorage.setItem(JWT_TOKEN_NAME, token);};


export const isLoggedIn = () => localStorage.getItem(JWT_TOKEN_NAME);



export const storeToken = token => localStorage.setItem(JWT_TOKEN_NAME, token);