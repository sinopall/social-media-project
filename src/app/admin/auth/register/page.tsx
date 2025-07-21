'use client';

import { useState } from 'react';
import { authService } from '@/services/auth/authService';
import AdminBaseLayout from '@/components/admin/AdminBaseLayout';
import RegisterForm from '@/components/admin/auth/RegisterForm';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);

    try {
      const data = await authService.register({ username, email, password });
      console.log('Registration successful:', data);
      toast.success('Account created successfully!');
      // TODO: Redirect user after successful registration
    } catch (err) {
      console.error('Registration failed:', err);
      toast.error('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminBaseLayout>
      <RegisterForm
        onSubmit={handleRegister}
        isLoading={isLoading}
        error={null}
      />
    </AdminBaseLayout>
  );
}
