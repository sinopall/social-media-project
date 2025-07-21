import {
  LoginCredentials,
  RegisterCredentials,
} from '@/interfaces/auth.interface';
import apiClient from '@/lib/apiClient';

export const authService = {
  /**
   * Sends a login request to the API.
   * @param credentials - The user's email and password.
   * @returns The data from the API response.
   */
  login: async (credentials: LoginCredentials) => {
    try {
      // The '/login' part is appended to the baseURL from apiClient
      const response = await apiClient.post('/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      // Re-throw the error to be handled by the component
      throw error;
    }
  },

  /**
   * Sends a registration request to the API.
   * @param credentials - The user's username, email, and password.
   * @returns The data from the API response.
   */
  register: async (credentials: RegisterCredentials) => {
    try {
      // The '/register' part is appended to the baseURL from apiClient
      const response = await apiClient.post('/register', credentials);
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      // Re-throw the error to be handled by the component
      throw error;
    }
  },
};
