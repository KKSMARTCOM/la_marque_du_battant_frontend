// utils/fetchClient.ts
export interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/**
 * Utility function to make HTTP requests with fetch, automatically including a token if available.
 * @param endpoint - The API endpoint (relative to API_URL).
 * @param options - The options for the fetch request.
 * @returns The response as JSON or text based on content type.
 */

export const fetchClient = async (
  endpoint: string,
  options: FetchOptions = {}
) => {
  const token = localStorage.getItem("access_token");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: options.method || "GET",
    headers,
    credentials: options.credentials || "include",
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    // Handle errors (e.g., logging, throwing custom error, etc.)
    const error = await response.text();
    throw new Error(`HTTP Error ${response.status}: ${error}`);
  }

  // Automatically parse JSON response if possible
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};
