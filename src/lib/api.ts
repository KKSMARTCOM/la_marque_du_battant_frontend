import toast from "react-hot-toast";
import { fetchClient } from "../../utils/fetchClient";
export const API_URL = "http://127.0.0.1:8000";

export const getCsrfToken = async (): Promise<void> => {
  const res = await fetch(`${API_URL}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to get CSRF token");
  }

  console.log("CSRF token set");
};

interface AuthResponse {
  data?: any;
  access_token?: string | any;
  message?: string | any;
}

//Authentification
export const register = async (body: {}): Promise<AuthResponse> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Register error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Register Failed");
  }
  return await res.json();
};

export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  await getCsrfToken();

  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Login error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Login Failed");
  }

  return await res.json();
};

export const logout = async (
  token: string | any
): Promise<{ message: string }> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/api/auth/logout`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la déconnexion");
  }
  return await res.json();
};

export const forgotPassword = async (
  email: string
): Promise<{ message: string }> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Login error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Login Failed");
  }

  return await res.json();
};

export const resetPassword = async (
  password: string,
  password_confirmation: string,
  hash: string | any
): Promise<AuthResponse> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/api/auth/reset-password/${hash}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ password, password_confirmation }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Reset error:", errorData);
    toast.error(errorData.message);
    throw new Error(errorData.message || "Reset Failed");
  }

  return await res.json();
};

//Users

export const getUser = async (token: string): Promise<UserType | null> => {
  const res = await fetch(`${API_URL}/api/user`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return await res.json();
};

export const getRoles = async (): Promise<{ data: RoleType[] } | null> => {
  const res = await fetch(`${API_URL}/api/roles`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch roles");
  }
  return await res.json();
};

export const addUsers = async (
  values: UserType
): Promise<{ message: string }> => {
  await getCsrfToken();
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to add users");
  }
  return await res.json();
};

export const getUsers = async (): Promise<{ data: UserType[] } | null> => {
  const res = await fetch(`${API_URL}/api/users`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to get users");
  }
  return await res.json();
};

export const deleteItem = async (
  item: string,
  id: string | any
): Promise<void> => {
  const res = await fetch(`${API_URL}/api/${item}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to get users");
  }
  console.log("Item deleted !");
};

//Products

export const getProducts = async () => {
  try {
    const data = await fetchClient("/api/products");
    console.log("GET response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
