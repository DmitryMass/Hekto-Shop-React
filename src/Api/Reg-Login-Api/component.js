const request = async (url = null, method = 'GET', body = null) => {
  const result = await fetch(`http://localhost:3001${url}`, {
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

export const registerUser = async (body) => {
  return await request('/register', 'POST', body);
};

export const loginUser = async (body) => {
  return await request('/login', 'POST', body);
};
