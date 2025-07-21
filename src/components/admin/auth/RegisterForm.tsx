import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

// Define the shape of the data the form will pass up
interface RegisterSubmitData {
  username: string;
  email: string;
  password: string;
}

// Define the props the component will accept
interface RegisterFormProps {
  onSubmit: (data: RegisterSubmitData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export default function RegisterForm({
  onSubmit,
  isLoading,
  error,
}: RegisterFormProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // A new local error state for password mismatch validation
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform validation before calling the onSubmit prop
    if (password !== confirmPassword) {
      setValidationError('Passwords do not match.');
      return;
    }

    setValidationError(null); // Clear local validation error
    await onSubmit({ username, email, password });
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 text-center">
        Create Account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-gray-900 focus:border-black focus:outline-none"
            placeholder="yourusername"
            required
            disabled={isLoading}
          />
        </div>

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
              minLength={6}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 hover:text-gray-900"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 pr-10 text-gray-900 focus:border-black focus:outline-none"
              placeholder="••••••••"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 hover:text-gray-900"
            >
              {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>
        </div>

        {/* Display API error from parent or local validation error */}
        {(error || validationError) && (
          <p className="mb-4 text-center text-sm text-red-600">
            {error || validationError}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded bg-black px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-900 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-sm text-gray-600">Already have an account?</span>
        <a
          href="/admin/auth/login"
          className="ml-2 text-sm font-semibold text-black underline hover:text-gray-900"
        >
          Sign in
        </a>
      </div>
    </div>
  );
}
