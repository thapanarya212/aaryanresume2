import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import { NavigationMenu } from '@/components/navigation-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Portfolio of John Doe, a passionate Full Stack Developer specializing in modern web technologies.',
  keywords: 'developer, portfolio, full stack, web development, react, next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://imgs.search.brave.com/0b63XefBE5MHBDqnV_iOyoTTjj8qyDs9W0GzrLbzFhE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29taW5nc29vbi5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzL3Np/dGVzLzMvZ2FsbGVy/eS9ibGVhY2gtdGhv/dXNhbmQteWVhci1i/bG9vZC13YXIvYmxl/YWNoLV90ZWFzZXJw/dl8yLmpwZw" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenu />
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}