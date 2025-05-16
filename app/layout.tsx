import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

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
      <body className="w-full overflow-x-hidden">
        <div className="w-full overflow-x-hidden">
          <Header />
          <main className="min-h-screen w-full">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}