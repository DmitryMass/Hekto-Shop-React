import { HOST, ROUTES } from '../../Components/Constant/constant';
// import jwt_decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';

const request = async (url = null, method = 'GET', body = null) => {
  const result = await fetch(`${HOST}${url}`, {
    method,
    body,
  });

  const data = await result.json();

  if (!result.ok) {
    const error = new Error(data);
    error.message = data;
    throw error;
  }

  return data;
};

export const registerUser = async (email, password) => {
  const data = await request('/api/user/registration', 'POST', {
    email,
    password,
    role: 'Admin',
  });
  localStorage.setItem('token', data.token);
  // locastorage token не обязателен
  return jwtDecode(data.token);
};

export const loginUser = async (body) => {
  // return await request('/api/user/login', 'POST', body);
  const data = await request('/api/user/login', 'POST', body);
  localStorage.setItem('token', data.token);
  // locastorage token не обязателен
  return jwtDecode(data.token);
};
