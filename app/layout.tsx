
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatButton from '@/components/ChatButton';
import ChatWindow from '@/components/ChatWindow';
import { ChatProvider } from '@/components/ChatContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DocBot - AI-Powered Healthcare Platform',
  description: 'Your Smart Doctor, Available 24/7',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logo.jpg', sizes: '16x16', type: 'image/jpg' },
      { url: '/images/logo.jpg', sizes: '32x32', type: 'image/jpg' },
    ],
    apple: [
      { url: '/images/logo.jpg', sizes: '180x180' }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChatProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatButton />
          <ChatWindow />
        </ChatProvider>
      </body>
    </html>
  );
}