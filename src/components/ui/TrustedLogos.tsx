import logo1 from '../../assets/heroBannerSection/logoipsum1.svg';
import logo2 from '../../assets/heroBannerSection/logoipsum2.svg';
import logo3 from '../../assets/heroBannerSection/logoipsum3.svg';
import logo4 from '../../assets/heroBannerSection/logoipsum4.svg';
import logo5 from '../../assets/heroBannerSection/logoipsum6.svg';
import logo6 from '../../assets/heroBannerSection/logo5.svg';

export const TrustedLogos = () => {
  const logos = [
    { src: logo1, alt: 'Partner logo 1' },
    { src: logo5, alt: 'Partner logo 2' },
    { src: logo3, alt: 'Partner logo 3' },
    { src: logo4, alt: 'Partner logo 4' },
    { src: logo2, alt: 'Partner logo 5' },
    { src: logo6, alt: 'Partner logo 6' },
  ];

  return (
    <div className='py-10 lg:pt-6'>
      <p className='text-center text-accent/70 text-sm tracking-wide'>
        TRUSTED BY OVER 20,000 USERS NATIONWIDE
      </p>

      {/* Marquee container */}
      <div className='mt-4 relative overflow-hidden'>
        <div className='flex animate-marquee gap-8 sm:gap-12'>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <img
              key={`logo-1-${index}`}
              src={logo.src}
              alt={logo.alt}
              className='h-6 sm:h-7 opacity-80 shrink-0'
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <img
              key={`logo-2-${index}`}
              src={logo.src}
              alt={logo.alt}
              className='h-6 sm:h-7 opacity-80 shrink-0'
            />
          ))}
          {/* Third set for extra smooth transition */}
          {logos.map((logo, index) => (
            <img
              key={`logo-3-${index}`}
              src={logo.src}
              alt={logo.alt}
              className='h-6 sm:h-7 opacity-80 shrink-0'
            />
          ))}
        </div>
      </div>
    </div>
  );
};
