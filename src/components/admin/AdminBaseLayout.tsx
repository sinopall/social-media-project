import React from 'react';

// Define the props to accept children
interface AdminBaseLayoutProps {
  children: React.ReactNode;
}

export default function AdminBaseLayout({ children }: AdminBaseLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      {children}
    </main>
  );
}
