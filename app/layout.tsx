import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Content } from './types';

import Navbar from './components/navbar';
import Footer from './components/footer';
import OfficialHeader from './components/official-header';
import { ThemeProvider } from './theme';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Cuenta Única',
  description: 'Sistema de Cuenta Única del Estado Dominicano',
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
      <body className={poppins.className}>
        <ThemeProvider>
          <OfficialHeader />
          <Navbar />
          {children}
          <Footer data={content.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
