import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Content } from './types';

import Navbar from './components/navbar';
import Footer from './components/footer';
import OfficialHeader from './components/official-header';
import { ThemeProvider } from './theme';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cuenta única',
  description: 'Sistema de cuenta única del gobierno dominicano',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentUrl = process.env.CONTENT_JSON_URL as string;
  const response = await fetch(contentUrl, {
    cache: 'no-store',
  });
  const content: Content = await response.json();

  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          <OfficialHeader />
          <Navbar data={content.navbar} />
          {children}
          <Footer data={content.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
