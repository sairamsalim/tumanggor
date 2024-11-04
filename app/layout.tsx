import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CookieConsent } from '@/components/cookie-consent';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tumanggor Law Firm - Excellence in Legal Services',
  description: 'Protecting Your Rights with Dedication and Expertise. Leading law firm specializing in corporate, civil, and criminal law.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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