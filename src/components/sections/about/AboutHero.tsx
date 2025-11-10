import { Badge } from '../../ui/Badge';
import globe from '../../../assets/aboutPage/global-network-connection-background-world-map-point-line-composition.svg';

export const AboutHero = () => {
  return (
    <section className='bg-footer text-base  relative'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20'>
          {/* Left content */}
          <div className='flex-1 pb-16 z-4'>
            <Badge
              color='white'
              className='bg-base/10 text-base border-accent/30'
            >
              <span>About Dasamonie</span>
            </Badge>
            <h1 className='mt-6 font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl text-base lg:text-base/80'>
              Make finance smarter,
              <br className='hidden sm:block' /> faster, and more accessible
              <br className='hidden sm:block' /> for everyone.
            </h1>
            <p className='mt-6 text-white lg:text-base/80 max-w-2xl text-lg sm:text-xl'>
              We started as a small team of innovators determined to bridge the
              gap between people and modern financial solutions. Today,
              Dasamonie stands as a trusted digital finance platform that
              empowers individuals and businesses to save, spend, borrow, and
              grow with confidence.
            </p>
          </div>

          {/* Right visual */}
          <div className='flex-1 flex justify-center absolute right-0 bottom-0 z-2'>
            <img
              src={globe}
              alt="Global network illustrating Dasamonie's worldwide digital financial connectivity"
              className='w-full max-w-[620px] h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
