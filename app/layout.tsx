import './globals.css';
import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal' 
});

export const metadata: Metadata = {
  title: 'مجتمع الكتابة | بيئتك الأمثل لتطوير قدراتك الكتابية',
  description: 'مجتمع الكتابة هو بيئة حاضنة لتطوير المهارات الكتابية من خلال برامج وورش عمل وملتقيات متخصصة',
  icons: {
    icon: [
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: [
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}