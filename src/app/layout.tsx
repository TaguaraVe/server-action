import './globals.css';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Chat } from '@/components/chat';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const metadata = {
  title: 'BlueBank',
  description: 'Tu banco amigo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-primary-100`}>
        <Header />
        {children}
        <Chat />
        <Footer />
      </body>
    </html>
  );
}
