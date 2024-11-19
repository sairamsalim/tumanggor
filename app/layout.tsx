import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CookieConsent } from '@/components/cookie-consent';
import { Toaster } from 'sonner';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tumanggor Law Firm - Keunggulan dalam Layanan Hukum',
  description: 'Melindungi Hak Anda dengan Dedikasi dan Keahlian. Firma hukum terkemuka yang mengkhususkan diri dalam hukum korporasi, perdata, dan pidana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}