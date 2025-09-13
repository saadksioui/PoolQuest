import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Piscine Survival Hub | Survive & Thrive at 1337 School',
  description: 'Comprehensive guides, resources, and practice tools for 1337 School\'s intensive coding bootcamp. Made by ex-poolers for future poolers.',
  keywords: ['1337 school', 'piscine', 'coding bootcamp', 'programming', 'survival guide', 'C programming'],
  authors: [{ name: 'Piscine Survival Hub Team' }],
  openGraph: {
    title: 'Piscine Survival Hub | Survive & Thrive at 1337 School',
    description: 'Comprehensive guides, resources, and practice tools for 1337 School\'s intensive coding bootcamp.',
    type: 'website',
    locale: 'en_US',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}