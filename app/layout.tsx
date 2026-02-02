import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Greek Golden Visa Properties | Kallithea, Athens',
  description: 'Invest €250,000 in premium Athens real estate and secure your Greek Golden Visa. Luxury apartments and lofts in Kallithea with guaranteed rental income.',
  keywords: 'Greek Golden Visa, Athens property, Kallithea real estate, EU residency, property investment Greece',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
