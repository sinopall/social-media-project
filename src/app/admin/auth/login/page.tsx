'use client';

import { useState } from 'react';
import LoginForm from '@/components/admin/auth/LoginForm';
import AdminBaseLayout from '@/components/admin/AdminBaseLayout';
import { authService } from '@/services/auth/authService';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  // This function contains the logic that was previously in the form
  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);

    try {
      const data = await authService.login({ email, password });
      console.log('Login successful:', data);
      toast.success('Login successful!');
    } catch (err) {
      console.error('Login failed:', err);
      toast.error('Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminBaseLayout>
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={null} />
    </AdminBaseLayout>
  );
}
