import type { Metadata } from 'next';
import { Cormorant_Garamond, Forum, Montserrat } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const sans = Montserrat({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const display = Forum({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thekleinicks.com/'),
  title: 'Madeline & Jack',
  description: 'Madeline Borehan and Jack Kleinick are getting married at Dawnridge in Beverly Hills on April 10, 2027. Find weekend plans, travel notes, and their guide to the area.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-32.png?v=2', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Madeline Borehan & Jack Kleinick | April 10, 2027',
    description: 'Madeline Borehan and Jack Kleinick are getting married at Dawnridge in Beverly Hills on April 10, 2027. Find weekend plans, travel notes, and their guide to the area.',
    type: 'website',
    images: [{ url: 'https://thekleinicks.com/og-homepage.png', width: 1200, height: 630, alt: 'MJ monogram and floral linework over the Dawnridge entrance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madeline Borehan & Jack Kleinick | April 10, 2027',
    description: 'Madeline Borehan and Jack Kleinick are getting married at Dawnridge in Beverly Hills on April 10, 2027. Find weekend plans, travel notes, and their guide to the area.',
    images: ['https://thekleinicks.com/og-homepage.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
