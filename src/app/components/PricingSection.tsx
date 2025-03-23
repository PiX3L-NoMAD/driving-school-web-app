'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';

const PricingSection = () => {
  const sliderRef = useRef<Slider | null>(null); // Reference to the slider

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaX !== 0) {
        if (sliderRef.current) {
          if (event.deltaX > 0) {
            sliderRef.current.slickNext();
          } else {
            sliderRef.current.slickPrev();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel
      );
    };
  }, []);

  const settings: Settings = {
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true,
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
          Pricing
        </h1>

        <div className='max-w-7xl mx-auto px-6'>
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {/* First Card */}
            <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-extrabold mb-4 text-center'>
                2-Hour Lesson
              </h3>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Price: £29.99
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  Pick-up and drop-off in
                  South-West London.
                </li>
                <li>
                  Training throughout the entire
                  lesson.
                </li>
                <li>
                  Private lesson with patient
                  instructors.
                </li>
                <li>
                  Confidence with a dual-control
                  system.
                </li>
              </ul>
              <p className='text-lg font-bold mt-4 text-center'>
                Payment required before the first
                lesson.
              </p>
            </div>

            {/* Second Card */}
            <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-extrabold mb-4 text-center'>
                Lesson Packages
              </h3>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Silver Package: £45
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  Compatible with a 6-hour driving
                  certificate.
                </li>
                <li>
                  Includes 3 lessons (6 hours
                  total).
                </li>
              </ul>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Gold Package: £75
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  Includes 5 lessons (10 hours
                  total).
                </li>
                <li>
                  Compatible with a 6-hour driving
                  certificate.
                </li>
              </ul>
              <p className='text-lg font-bold mt-4 text-center'>
                Payment required before the first
                lesson.
              </p>
            </div>

            {/* Third Card */}
            <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-extrabold mb-4 text-center'>
                Behind-the-Wheel Test
              </h3>
              <p className='text-xl font-extrabold mb-4 text-center'>
                Price: £25
              </p>
              <ul className='text-sm space-y-2 text-center'>
                <li>
                  Pick-up within South-West London
                  1 hour before the test.
                </li>
                <li>
                  All test registration and
                  paperwork handled.
                </li>
                <li>
                  Certified vehicle for the
                  driving test.
                </li>
                <li>
                  Drop-off within South-West
                  London.
                </li>
              </ul>
              <p className='text-lg font-bold mt-4 text-center'>
                Payment required before the test.
              </p>
            </div>
          </Slider>
        </div>

        <a
          className='cta-button transition hover:bg-yellow-200 w-52 p-2 ml-4 rounded-lg flex justify-center items-center h-16 bg-yellow-400'
          href='tel:0000000000'
        >
          <h1 className='text-white text-center text-lg font-bold'>
            Call/text us to book now!
          </h1>
        </a>
      </section>
    </>
  );
};

export default PricingSection;
