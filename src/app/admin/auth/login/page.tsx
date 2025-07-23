'use client';

import { useState } from 'react';
import LoginForm from '@/components/admin/auth/LoginForm';
import AdminBaseLayout from '@/components/admin/AdminBaseLayout';
import { authService } from '@/services/auth/authService';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);

    try {
      await authService.login({ email, password });
      toast.success('Login successful!');
    } catch (err: any) {
      toast.error(
        `Failed to login. ${err.response?.data?.error || 'Please try again.'}`
      );
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
