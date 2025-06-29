import React from 'react';

const logos = [
  '/assets/business/bosch.svg',
  '/assets/business/cisco.svg',
  '/assets/business/samsung.svg',
  '/assets/business/citi.svg',
  '/assets/business/infosys.svg',
  '/assets/business/ford.svg',
  '/assets/business/mattel.svg',
  '/assets/business/vimeo.svg',
  '/assets/business/fender.svg',
  '/assets/business/aflac.svg',
  '/assets/business/tcs.svg',
  '/assets/business/vw.svg',
];

const CompanySlider = () => {
  return (
    <div className="bg-white py-10 w-full">
      <h3 className="text-center text-lg md:text-xl font-medium text-gray-700 mb-6">
        Join over 17,200+ companies training teams with Udemy Business
      </h3>

      {/* Container with max width and fading edges */}
      <div className="relative w-full flex justify-center">
        <div className="relative max-w-screen-xl w-full overflow-hidden">
          {/* Fade effect using mask-image */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white" />

          {/* Animated Logo Track */}
          <div className="flex animate-scrollLogo whitespace-nowrap hover:[animation-play-state:paused] relative z-20">
            {logos.concat(logos).map((logo, idx) => (
              <div key={idx} className="mx-8 flex-shrink-0">
                <img
                  src={logo}
                  alt={`logo-${idx}`}
                  className="h-10 opacity-70 grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
