'use client';

import { useState } from 'react';
import { authService } from '@/services/auth/authService';
import AdminBaseLayout from '@/components/admin/AdminBaseLayout';
import RegisterForm from '@/components/admin/auth/RegisterForm';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
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
      await authService.register({ username, email, password });
      toast.success('Account created successfully!');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push('/admin/auth/login');
    } catch (err: any) {
      toast.error(
        `Failed to register. ${err.response?.data?.error || 'Please try again.'}`
      );
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
