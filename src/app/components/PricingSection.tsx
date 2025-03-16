'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';

const PricingSection = () => {
  const sliderRef = useRef<Slider | null>(null); // Reference to the slider

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // Check if the scroll is horizontal
      if (event.deltaX !== 0) {
        if (sliderRef.current) {
          if (event.deltaX > 0) {
            sliderRef.current.slickNext(); // Go to the next slide
          } else {
            sliderRef.current.slickPrev(); // Go to the previous slide
          }
        }
      }
    };

    // Add the event listener on component mount
    window.addEventListener('wheel', handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel
      );
    };
  }, []); // Empty dependency array to run this effect only once on mount

  // Slider settings
  const settings: Settings = {
    centerMode: false, // Avoids large margins if enabled
    variableWidth: false, // Prevents variable width of slides
    adaptiveHeight: true, // Keeps height consistent across slides
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className='bg-sky-400 py-15'
        id='pricing'
      >
        <h1 className='text-yellow-300 text-5xl font-extrabold text-center mb-8'>
          Priser
        </h1>

        <div className='max-w-7xl mx-auto px-6'>
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {/* First Card */}
            <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-extrabold mb-4 text-center'>
                2-Timmars Lektioner
              </h3>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Pris: 195 SEK
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  Hämtning och lämning inom
                  Stockholmsområdet.
                </li>
                <li>
                  Träning under hela lektionen.
                </li>
                <li>
                  Privatlektion med tålmodiga
                  instruktörer.
                </li>
                <li>
                  Självförtroende med
                  dubbelkontroll system.
                </li>
              </ul>
              <p className='text-lg font-bold mt-4 text-center'>
                Betala innan första lektionen.
              </p>
            </div>

            {/* Second Card */}
            <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-extrabold mb-4 text-center'>
                Lektion Paket
              </h3>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Silver Paket: 520 SEK
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  DMV 6 Timme Certifikat
                  Kompatibelt.
                </li>
                <li>
                  Inkluderar 3 lektioner (6
                  timmar).
                </li>
              </ul>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Guld Paket: 850 SEK
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  Inkluderar 5 lektioner (10
                  timmar).
                </li>
                <li>
                  DMV 6 Timme Certifikat
                  Kompatibelt.
                </li>
              </ul>
              <p className='text-lg font-bold mt-4 text-center'>
                Betala innan första lektionen.
              </p>
            </div>

            {/* Third Card */}
            <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-extrabold mb-4 text-center'>
                Bakom Ratten Test
              </h3>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Pris: 250 SEK
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  Hämtning inom Stockholmsområdet
                  1 timme före DMV tid.
                </li>
                <li>
                  Alla DMV registreringar och
                  pappersarbete hanteras.
                </li>
                <li>
                  Färdigt fordon för körprovet.
                </li>
                <li>
                  Lämning inom Stockholmsområdet.
                </li>
              </ul>
              <p className='text-lg font-bold mt-4 text-center'>
                Betala innan testet.
              </p>
            </div>
          </Slider>
        </div>
        <a
          className='cta-button transition hover:bg-yellow-200 w-52 p-2 ml-4 rounded-lg flex justify-center items-center h-16 bg-yellow-400'
          href='tel:2138411290'
        >
          <h1 className='text-white text-center text-lg font-bold'>
            Ring / SMSa för att boka
          </h1>
        </a>
      </section>
    </>
  );
};

export default PricingSection;
