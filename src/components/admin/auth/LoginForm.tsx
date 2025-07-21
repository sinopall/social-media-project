import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

// Define the shape of the data the form will pass up
interface LoginSubmitData {
  email: string;
  password: string;
}

// Define the props the component will accept
interface LoginFormProps {
  onSubmit: (data: LoginSubmitData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export default function LoginForm({
  onSubmit,
  isLoading,
  error,
}: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // The handleSubmit function now calls the onSubmit prop
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-6 text-2xl font-bold text-gray-900 text-center">
        Login
      </h1>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-black focus:outline-none"
          placeholder="you@example.com"
          required
          disabled={isLoading}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 pr-10 text-gray-900 focus:border-black focus:outline-none"
            placeholder="••••••••"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 hover:text-gray-900"
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <IoEyeOffOutline className="h-5 w-5" />
            ) : (
              <IoEyeOutline className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {error && (
        <p className="mb-4 text-center text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        className="w-full rounded bg-black px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-900 disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="mt-6 text-center">
        <span className="text-sm text-gray-600">
          Don&apos;t have an account?
        </span>
        <a
          href="/admin/auth/register"
          className="ml-2 text-sm font-semibold text-black underline hover:text-gray-900"
        >
          Create new
        </a>
      </div>
    </form>
  );
}
