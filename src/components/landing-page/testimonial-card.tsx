import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
      <Image
        src={img}
        alt={client}
        width={80}
        height={80}
        className="mb-3 h-16 w-16 rounded-full object-cover border-2 border-gray-200 shadow"
      />
      <h6 className="text-lg font-semibold text-gray-900">{client}</h6>
      <div className="mb-3 text-sm font-medium text-gray-700">{title}</div>
      <p className="mb-5 font-normal text-gray-500">&quot;{feedback}&quot;</p>
    </div>
  );
}

export default TestimonialCard;
