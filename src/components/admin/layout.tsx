'use client';

import React, { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-black antialiased">{children}</div>;
}

export default Layout;
