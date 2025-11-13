import { Badge } from '../../ui/Badge';

export const FAQHero = () => {
  return (
    <section className='bg-section'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 md:py-15'>
        <div className='text-center'>
          <Badge className='mb-4' icon={<span className='hidden' />}>
            FAQ
          </Badge>
          <h1 className='font-extrabold text-accent leading-tight text-3xl md:text-5xl'>
            We’ve got answers!
          </h1>
          <p className='mt-4 text-2xl text-accent/80 max-w-xl mx-auto'>
            Find answers to common questions
            <br className='hidden sm:block' /> about dasamonie platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;
