import { Badge } from '../../ui/Badge';

export const Mission = () => {
  return (
    <section className='bg-hero'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        <div className='mx-auto max-w-5xl'>
          <div className='bg-base rounded-2xl sm:rounded-3xl shadow-sm px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12'>
            <Badge
              icon={null}
              className='bg-menu text-accent border-accent/10 px-3 py-1 text-xs'
            >
              <span>Our mission</span>
            </Badge>
            <h2 className='mt-4 text-accent font-extrabold leading-relaxed text-2xl sm:text-3xl lg:text-4xl'>
              Our mission is to redefine how money works by merging intelligent
              technology with human-centered design to create a truly seamless
              financial experience.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
