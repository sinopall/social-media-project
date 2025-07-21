'use client';
import Image from 'next/image';

export function FixedPlugin() {
  return (
    <a
      href="https://www.material-tailwind.com"
      target="_blank"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-black shadow-lg transition-colors hover:bg-gray-100"
      aria-label="Made With Material Tailwind"
    >
      <Image
        width={20}
        height={20}
        className="h-5 w-5"
        alt="Material Tailwind"
        src="https://www.material-tailwind.com/favicon.png"
      />
      Made With Material Tailwind
    </a>
  );
}
