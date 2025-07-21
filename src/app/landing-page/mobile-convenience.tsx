'use client';

import React from 'react';
import Image from 'next/image';

const OPTIONS = [
  {
    title: '100',
    description: 'Learning Courses',
  },
  {
    title: '500+',
    description: 'Expert Instructors',
  },
  {
    title: '24/7',
    description: 'Support',
  },
  {
    title: '5/5',
    description: 'Review Stars',
  },
];

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl shadow-md bg-white p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="text-3xl font-bold text-gray-900 mb-2">{title}</div>
      <div className="text-gray-900 text-base">{children}</div>
    </div>
  );
}

export function MobileConvenience() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/iphone.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <h2 className="text-3xl font-extrabold text-black mb-4">
            Mobile Convenience
          </h2>
          <p className="mb-5 px-4 text-left text-xl text-gray-500 lg:px-0">
            Access your learning materials on the go.
          </p>
          <div className="col-span-2 grid gap-5 grid-cols-2">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileConvenience;
