import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import ScrollReveal from '@/components/ScrollReveal';

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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <noscript>
          {/* Without JS the scroll-reveal observer never runs — reveal everything. */}
          <style>{`.animated-element{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body className="w-full overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            تخطّي إلى المحتوى الرئيسي
          </a>
          <div className="w-full overflow-x-hidden">
            <Header />
            <main id="main-content" tabIndex={-1} className="min-h-screen w-full">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
          <ScrollReveal />
        </ThemeProvider>
      </body>
    </html>
  );
}