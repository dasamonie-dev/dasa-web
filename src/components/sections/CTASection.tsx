import { StoreButtons } from '../ui/StoreButtons';
import ctaImage from '../../assets/ctaBannerSection/laughing-guy.svg';

export const CTASection = () => {
  return (
    <section className='w-full flex justify-center py-16 md:py-20 md:mt-30 px-5 lg:px-0'>
      <div className='bg-linear-to-br from-accent via-accent to-[#34f31b] lg:w-7xl rounded-4xl pt-10  lg:relative lg:h-[300px] lg:pb-100 '>
        <div className='max-w-[1400px] px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
            {/* Text Content */}
            <div className='flex-1 text-center lg:text-left'>
              <h2 className='font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-5xl leading-tight'>
                Ready to experience smart finance? Join{' '}
                <span className='text-menu'>Dasamonie</span> today.
              </h2>
              <div className='mt-8 flex justify-center lg:justify-start'>
                <StoreButtons size='md' />
              </div>
            </div>

            {/* Image */}
            <div className='flex-1 flex justify-center lg:justify-end'>
              <img
                src={ctaImage}
                alt='Happy customer with phone'
                className='w-full max-w-[400px] sm:max-w-[400px] lg:max-w-[600px] h-auto lg:absolute lg:bottom-0 lg:right-0'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
