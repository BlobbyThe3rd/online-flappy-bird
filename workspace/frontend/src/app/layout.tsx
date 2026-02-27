import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flappy Bird Multiplayer',
  description: 'Real-time multiplayer Flappy Bird game',
  themeColor: '#1a1a3e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/25 to-slate-900 text-white`}>
        {children}
      </body>
    </html>
  );
}