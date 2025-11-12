import { Badge } from '../ui/Badge';
import { StoreButtons } from '../ui/StoreButtons';
import { TrustedLogos } from '../ui/TrustedLogos';

// Assets
import phone from '../../assets/heroBannerSection/herobannermobilephone.svg';
import user1 from '../../assets/heroBannerSection/herobanneruser1.svg';
import user2 from '../../assets/heroBannerSection/herobanneruser2.svg';
import user3 from '../../assets/heroBannerSection/herobanneruser3.svg';
import user4 from '../../assets/heroBannerSection/herobanneruser4.svg';
import checkmark from '../../assets/heroBannerSection/checkmark.svg';

export const Hero = () => {
  return (
    <section className='bg-hero font-nunito'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8'>
        {/* Centered textual content */}
        <div className='flex flex-col items-center text-center py-10 lg:py-16'>
          <Badge>
            <span>⭐ The people's banking choice</span>
          </Badge>
          <h1 className='mt-5 font-extrabold text-accent leading-tight text-4xl sm:text-5xl lg:text-6xl'>
            Simple, Swift and
            <br className='hidden sm:block' /> Secure finance for
            <br className='hidden sm:block' /> everyone.
          </h1>
          <p className='mt-4 text-accent/80 sm:text-2xl max-w-xl'>
            Empowering individuals and businesses with intelligent financial
            solutions.
          </p>
          <StoreButtons className='mt-6' size='md' />
        </div>

        {/* Visual gallery & phone overlay */}
        <div className='relative mt-50'>
          <div className='flex w-full items-end lg:justify-between pt-4 pb-40 justify-center overflow-x-hidden'>
            <img
              src={user1}
              alt='Smiling man with phone'
              className='lg:h-100 h-48 w-full shadow-md hidden md:block'
            />
            <img
              src={user2}
              alt='Happy woman using phone'
              className='lg:h-100 h-48 w-full  shadow-md'
            />
            <img
              src={user3}
              alt='Young lady texting'
              className='lg:h-100 h-48 w-full  shadow-md'
            />
            <img
              src={user4}
              alt='Business man with phone'
              className='lg:h-100 h-48 w-full  shadow-md hidden md:block'
            />
          </div>

          {/* Centered phone overlay */}
          <div className='block absolute inset-x-0 -top-50'>
            <div className='mx-auto w-fit relative'>
              <img
                src={phone}
                alt='App phone'
                className='w-[360px] drop-shadow-xl lg:w-[400px]'
              />

              <span className='absolute -right-4 top-0 bg-menu rounded-full shadow-md'>
                <img src={checkmark} alt='check mark icon' />
              </span>
            </div>
          </div>
        </div>

        {/* Trusted logos */}
        <TrustedLogos />
      </div>
    </section>
  );
};

export default Hero;
