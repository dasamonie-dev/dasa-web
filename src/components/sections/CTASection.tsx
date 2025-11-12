import { StoreButtons } from '../ui/StoreButtons';
import ctaImage from '../../assets/ctaBannerSection/laughing-guy.svg';

export const CTASection = () => {
  return (
    <section className='w-full flex justify-center py-16 md:py-20 md:mt-30 px-5 '>
      <div className='bg-linear-to-br from-accent via-accent to-[#34f31b] md:w-7xl rounded-4xl pt-10  md:relative md:h-[250px] md:pb-80 lg:pb-100 '>
        <div className='max-w-[1400px] px-4 sm:px-6 md:px-8'>
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            {/* Text Content */}
            <div className='flex-1 text-center md:text-left'>
              <h2 className='font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-5xl leading-tight'>
                Ready to experience smart finance? Join{' '}
                <span className='text-menu'>Dasamonie</span> today.
              </h2>
              <div className='mt-8 flex justify-center md:justify-start'>
                <StoreButtons size='md' />
              </div>
            </div>

            {/* Image */}
            <div className='flex-1 flex justify-center md:justify-end'>
              <img
                src={ctaImage}
                alt='Happy customer with phone'
                className='w-full max-w-[400px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto md:absolute md:bottom-0 md:right-0 rounded-br-4xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
