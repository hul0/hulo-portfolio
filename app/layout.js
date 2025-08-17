import { Inter } from 'next/font/google';
import './css/card.scss';
import './css/globals.scss';
import Footer from './components/footer';
import Navbar from './components/navbar';
// Import the new client component
import ScrollToTop from './components/helper/dynamic-scroll-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Rupam Ghosh',
  description: 'This is the portfolio of Rupam Ghosh. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to learning new technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          {/* Use the new component here */}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}