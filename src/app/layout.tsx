import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Svensk Trafikskola',
  description:
    'Boka körlektioner och bli en säker förare med vår körskola.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='sv'>
      <body className='font-sans pt-20'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
