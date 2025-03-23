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
        <div className='absolute inset-0'>
          <Image
            src='/peter-van-der-meulen-wzJcW1MNRBw-unsplash.jpg'
            alt='South-West London street on a sunny day'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-white opacity-10'></div>
        </div>

        <div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-4'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>
            Welcome to <br /> Our Driving School
          </h1>
          <p className='text-xl md:text-2xl mb-8 max-w-2xl'>
            Learn to drive safely and confidently
            with our certified instructors
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              href='/courses'
              className='bg-blue-400 hover:bg-blue-300 transition-colors text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg'
            >
              Book Now
            </a>
            <a
              href='/contact'
              className='bg-yellow-500 hover:bg-yellow-400 transition-colors text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg'
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className='py-16 bg-yellow-500'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>
            We Prepare You for Every Situation
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Card 1 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <Image
                src='/fredrik-ohlander-zqTl8Sm_Vkg-unsplash.jpg'
                alt='Two men pushing an old car in the snow'
                width={400}
                height={250}
                className='object-cover w-full h-48'
              />
              <div className='p-6'>
                <div className='flex items-center gap-2 text-blue-600 mb-2'>
                  <FaSnowflake size={24} />
                  <span className='font-semibold'>
                    Winter Driving Skills
                  </span>
                </div>
                <p className='text-gray-700'>
                  Learn how to handle icy and
                  snowy roads with practical
                  exercises and expert
                  instruction.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <Image
                src='/benoit-deschasaux-NOHGv25yg-A-unsplash.jpg'
                alt='White car parked by a forest road'
                width={400}
                height={250}
                className='object-cover w-full h-48'
              />
              <div className='p-6'>
                <div className='flex items-center gap-2 text-blue-600 mb-2'>
                  <FaRoad size={24} />
                  <span className='font-semibold'>
                    Road Awareness
                  </span>
                </div>
                <p className='text-gray-700'>
                  We teach you the best strategies
                  for navigating both rural and
                  urban areas with confidence.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <Image
                src='/happy-woman-listening-music.jpg'
                alt='Happy young woman with cars in the background'
                width={400}
                height={250}
                className='object-cover w-full h-48'
              />
              <div className='p-6'>
                <div className='flex items-center gap-2 text-blue-600 mb-2'>
                  <FaCarSide size={24} />
                  <span className='font-semibold'>
                    Safe Driving Skills
                  </span>
                </div>
                <p className='text-gray-700'>
                  Our training focuses on making
                  you comfortable and confident
                  behind the wheel in any traffic
                  situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <PricingSection />
      </section>
    </>
  );
}
