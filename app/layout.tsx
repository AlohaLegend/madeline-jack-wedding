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
  title: 'Madeline & Jack — Our Wedding',
  description: 'Celebrate Madeline and Jack at Dawnridge in Beverly Hills.',
  openGraph: {
    title: 'Madeline & Jack — Our Wedding',
    description: 'A celebration at Dawnridge in Beverly Hills.',
    type: 'website',
    images: [{ url: 'https://alohalegend.github.io/madeline-jack-wedding/og.png', width: 1536, height: 801, alt: 'Madeline and Jack — A celebration at Dawnridge' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madeline & Jack — Our Wedding',
    description: 'A celebration at Dawnridge in Beverly Hills.',
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
