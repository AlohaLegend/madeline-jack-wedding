import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://alohalegend.github.io/madeline-jack-wedding/'),
  title: 'Madeline & Jack | Our Wedding',
  description: 'Madeline and Jack are getting married at Dawnridge in Beverly Hills. Find weekend plans, travel notes, and their guide to the area.',
  openGraph: {
    title: 'Madeline & Jack | Our Wedding',
    description: 'Madeline and Jack are getting married at Dawnridge in Beverly Hills. Find weekend plans, travel notes, and their guide to the area.',
    type: 'website',
    images: [{ url: 'https://alohalegend.github.io/madeline-jack-wedding/og.png', width: 1536, height: 801, alt: 'Madeline and Jack, a celebration at Dawnridge' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madeline & Jack | Our Wedding',
    description: 'Madeline and Jack are getting married at Dawnridge in Beverly Hills. Find weekend plans, travel notes, and their guide to the area.',
    images: ['https://alohalegend.github.io/madeline-jack-wedding/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
