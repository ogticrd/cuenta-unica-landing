import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import OfficialHeader from './components/official-header';
import { ThemeProvider } from './theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cuenta única',
  description: 'Sistema de cuenta única del gobierno dominicano',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          <OfficialHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
