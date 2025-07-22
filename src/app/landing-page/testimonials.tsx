'use client';

import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    feedback:
      'It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!',
    client: 'Jessica Devis',
    title: 'CEO @ MARKETING DIGITAL LTD.',
    img: '/image/avatar1.jpg',
  },
  {
    feedback:
      'It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.',
    client: 'Mary Joshiash',
    title: 'MARKETING @ APPLE INC.',
    img: '/image/avatar2.jpg',
  },
  {
    feedback:
      'They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.',
    client: 'Marcell Glock',
    title: 'CFO @ APPLE INC..',
    img: '/image/avatar3.jpg',
  },
];

function TestimonialCard({
  feedback,
  client,
  title,
  img,
}: {
  feedback: string;
  client: string;
  title: string;
  img: string;
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={img}
        alt={client}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gray-500"
      />
      <p className="text-gray-700 italic mb-4">&quot;{feedback}&quot;</p>
      <div className="mt-2">
        <h4 className="font-semibold text-lg text-black">{client}</h4>
        <span className="text-sm text-gray-500">{title}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center">
          <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
            <UserIcon className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl text-center mb-8">
            Discover what our valued clients have to say about their experiences
            with our services. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
