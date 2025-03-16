'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 100px down
      setVisible(window.scrollY > 100);
    };
    window.addEventListener(
      'scroll',
      handleScroll
    );
    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 bg-white shadow-md'
          : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className='container mx-auto flex items-center justify-between py-4 px-6'>
        <Link
          href='/'
          className='flex items-center'
        >
          <Image
            src='/3Z_2103.w026.n002.283B.p900.283.jpg'
            alt='Svensk Trafikskola Logo'
            width={50}
            height={50}
            className='mr-2'
          />
          <span className='text-2xl font-semibold text-gray-900'>
            Svensk Trafikskola
          </span>
        </Link>
        <div className='space-x-6 text-lg'>
          <Link
            href='/about'
            className='text-gray-800 hover:text-gray-600'
          >
            Om oss
          </Link>
          <Link
            href='/courses'
            className='text-gray-800 hover:text-gray-600'
          >
            Kurser
          </Link>
          <Link
            href='/contact'
            className='text-gray-800 hover:text-gray-600'
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
