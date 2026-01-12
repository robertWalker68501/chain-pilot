import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const jetMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetMono',
});

export const metadata: Metadata = {
  title: 'ChainPilot',
  description:
    'ChainPilot is a customer-facing supply chain platform that helps businesses give customers real-time visibility into orders, shipments, inventory, and delivery timelines. Reduce support tickets, increase trust, and provide a premium customer experience with modern dashboards, notifications, and self-service tracking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={inter.variable}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex h-screen flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
