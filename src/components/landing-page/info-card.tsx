import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">{title}</h2>
      <div className="font-normal text-gray-900">{children}</div>
    </div>
  );
}

export default InfoCard;
