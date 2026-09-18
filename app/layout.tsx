import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://celestialx.space'),
  title: 'CelestialX | Beyond the Ordinary',
  description:
    'A personal digital universe built around curiosity, creativity, technology, stories, and exploration.',
  keywords: ['CelestialX', 'portfolio', 'space', 'technology', 'creativity', 'Bangalore'],
  openGraph: {
    title: 'CelestialX — Beyond the Ordinary',
    description:
      'A personal digital universe built around curiosity, creativity, technology, stories, and exploration.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CelestialX | Beyond the Ordinary',
    description:
      'A personal digital universe built around curiosity, creativity, technology, stories, and exploration.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-[var(--font-inter)] cosmic-bg min-h-screen antialiased">
        <StarField />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
