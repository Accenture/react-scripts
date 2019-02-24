const tokenKey = 'digital-product-token';
let token = null;

export const getAuthenticationToken = () => {
  if (token) return token;

  token = localStorage.getItem(tokenKey);
  return token;
};

export const invalidateAuthenticationToken = () => {
  token = null;
  localStorage.removeItem(tokenKey);
};

export const setAuthenticationToken = value => {
  token = value;
  localStorage.setItem(tokenKey, value);
};
