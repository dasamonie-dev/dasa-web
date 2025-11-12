import { Badge } from '../../ui/Badge';

export const BlogHero = () => {
  return (
    <section className='bg-accent lg:h-[55vh]'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        {/* Heading */}
        <div className='text-center'>
          {/* Tiny badge */}
          <Badge className='mb-4' icon={<span className='hidden' />}>
            Blog
          </Badge>
          <h1 className='font-extrabold text-base leading-tight text-3xl md:text-5xl'>
            Insights to Power
            <br className='hidden sm:block' /> Your Money Journey
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
