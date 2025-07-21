import '../globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import AdminBaseLayout from '@/components/admin/AdminBaseLayout';
import { Toaster } from 'react-hot-toast';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NextJS Tailwind App Presentation Page',
  description:
    'We are thrilled to offer you a Free App Presentation Template, a beautifully designed and user-friendly Tailwind CSS theme crafted specifically for app developers like you. The free app presentation template includes key features such as hero, features, FAQ, stats, and testimonial sections.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-50 text-black">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <AdminBaseLayout>
          <Toaster position="top-center" reverseOrder={false} />
          <main className="flex-1 w-full mx-auto">{children}</main>
        </AdminBaseLayout>
      </body>
    </html>
  );
}
