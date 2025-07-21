'use client';

import React from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/outline';

export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl">
        <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <Image
          width={768}
          height={400}
          src="/image/Background.png"
          className="w-full object-cover scale-110 rounded-xl h-full"
          alt=""
        />
        <button
          type="button"
          className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 transition rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          aria-label="Play Video"
        >
          <PlayIcon className="h-6 w-6 text-gray-900" />
        </button>
      </div>
    </div>
  );
}

export default VideoIntro;
