import Image from 'next/image';
import {
  FaCarSide,
  FaSnowflake,
  FaRoad,
} from 'react-icons/fa';
import PricingSection from './components/PricingSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative min-h-screen place-content-center'>
        {/* Fullscreen Hero Image */}
        <div className='absolute inset-0'>
          <Image
            src='/peter-van-der-meulen-wzJcW1MNRBw-unsplash.jpg'
            alt='svensk gata, en solig dag'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-white opacity-10'></div>
        </div>

        {/* Centered Content */}
        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-4'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>
            Välkommen till <br /> vår trafikskola
          </h1>
          <p className='text-xl md:text-2xl mb-8 max-w-2xl'>
            Lär dig köra tryggt och säkert med
            våra certifierade instruktörer
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='/courses'
              className='bg-blue-400 hover:bg-blue-300 transition-colors text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg'
            >
              Boka nu
            </a>
            <a
              href='/contact'
              className='bg-yellow-500 hover:bg-yellow-400 transition-colors text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg'
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className='py-16 bg-yellow-500'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            Vi lär dig hantera alla situationer
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Card 1 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <Image
                src='/fredrik-ohlander-zqTl8Sm_Vkg-unsplash.jpg'
                alt='Två killar som puttar en gammal bil i snö'
                width={400}
                height={250}
                className='object-cover w-full h-48'
              />
              <div className='p-6'>
                <div className='flex items-center gap-2 text-blue-600 mb-2'>
                  <FaSnowflake size={24} />
                  <span className='font-semibold'>
                    Snöiga situationer
                  </span>
                </div>
                <p className='text-gray-700'>
                  Lär dig att hantera vinterväglag
                  med praktiska övningar och
                  expertinstruktion.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <Image
                src='/benoit-deschasaux-NOHGv25yg-A-unsplash.jpg'
                alt='Vit bil parkerad vid en skogsväg'
                width={400}
                height={250}
                className='object-cover w-full h-48'
              />
              <div className='p-6'>
                <div className='flex items-center gap-2 text-blue-600 mb-2'>
                  <FaRoad size={24} />
                  <span className='font-semibold'>
                    Vägkännedom
                  </span>
                </div>
                <p className='text-gray-700'>
                  Vi visar dig de bästa
                  strategierna för att navigera på
                  både landsbygd och stadsområden.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <Image
                src='/happy-woman-listening-music.jpg'
                alt='Glad ung kvinna med bilar i bakgrunden'
                width={400}
                height={250}
                className='object-cover w-full h-48'
              />
              <div className='p-6'>
                <div className='flex items-center gap-2 text-blue-600 mb-2'>
                  <FaCarSide size={24} />
                  <span className='font-semibold'>
                    Säkra färdigheter
                  </span>
                </div>
                <p className='text-gray-700'>
                  Vår undervisning fokuserar på
                  att göra dig bekväm och säker
                  bakom ratten i alla
                  trafiksituationer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <PricingSection />
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#fde047'
            d='M0,96L80,133.3C160,171,320,245,480,250.7C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg> */}
      </section>
    </>
  );
}
