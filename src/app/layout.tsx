
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { AnimatedGridBackground } from '@/components/animated-grid-background';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter, Space_Grotesk } from 'next/font/google';
import ScrollToTop from '@/components/scroll-to-top';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});


export const metadata: Metadata = {
  title: 'Synapse Portfolio | Tools & Pipeline Developer',
  description: 'Portfolio of a tools and pipeline software developer for the video game and 3D animation industries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-body antialiased min-h-screen flex flex-col relative", inter.variable, spaceGrotesk.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <AnimatedGridBackground />
          <Header />
          <main className="flex-grow flex flex-col mt-12">{children}</main>
          <Footer />
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
