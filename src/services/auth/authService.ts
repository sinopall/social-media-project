import {
  LoginCredentials,
  RegisterCredentials,
} from '@/interfaces/auth.interface';
import apiClient from '@/lib/apiClient';

export const authService = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await apiClient.post('/login', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (credentials: RegisterCredentials) => {
    try {
      const response = await apiClient.post('/register', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const response = await apiClient.get('/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      await apiClient.post('/logout');
    } catch (error) {
      throw error;
    }
  },
};
