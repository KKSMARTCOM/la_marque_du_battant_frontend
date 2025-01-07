const TOKEN_KEY = "auth_token";
const USER_DATA = "user_data";

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
  return localStorage.removeItem(TOKEN_KEY);
};

export const getUserData = (): string | null => {
  return localStorage.getItem(USER_DATA);
};

export const setUserData = (data: any): void => {
  return localStorage.setItem(USER_DATA, data);
};

export const removeUserData = (): void => {
  return localStorage.removeItem(USER_DATA);
};
