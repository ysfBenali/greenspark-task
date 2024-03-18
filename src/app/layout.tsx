import type { Metadata, Viewport } from 'next';
import { Cabin } from 'next/font/google';
import './globals.css';

const url =
  process.env.NODE_ENV !== 'development'
    ? (process.env.NEXT_PUBLIC_WEBSITE_URL as string)
    : 'http://localhost:3000';

const title = 'Greenspark';
const description =
  'Easily add tree planting, plastic rescuing and carbon offsetting into any customer journey to boost your conversions, customer retention and app usage.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title,
    description,
    url,
    images: [
      {
        url: `${url}/assets/thumbnail/thumbnail.svg`,
        width: 800,
        height: 400,
        alt: 'greenspark',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/assets/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/assets/favicon/favicon.ico',
    apple: [
      {
        url: '/assets/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: {
      rel: 'mask-icon',
      url: '/assets/favicon/safari-pinned-tab.svg',
    },
  },
  manifest: '/assets/favicon/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#3B755F',
};

const cabin = Cabin({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
