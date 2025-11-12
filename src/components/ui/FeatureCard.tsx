import { Link } from 'react-router-dom';

interface FeatureCardProps {
  id?: string; // optional DOM id for in-page scrolling
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  linkTo: string;
  linkText?: string;
}

export const FeatureCard = ({
  id,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  linkTo,
  linkText = 'Download App',
}: FeatureCardProps) => {
  return (
    <div
      id={id}
      className='bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow lg:w-5xl scroll-mt-24'
    >
      <div className='flex flex-col md:flex-row md:items-center'>
        {/* Left side - Text Content */}
        <div className='flex-1 p-6 sm:p-8 lg:p-10'>
          <p className='text-accent font-semibold text-sm mb-2'>{title}</p>
          <h3 className='font-bold text-accent text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4'>
            {subtitle}
          </h3>
          <p className='text-accent/70 md:text-2xl leading-relaxed mb-6'>
            {description}
          </p>
          <Link
            to={linkTo}
            className='inline-block px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-colors'
          >
            {linkText}
          </Link>
        </div>

        {/* Right side - Image */}
        <div className='md:w-[300px] md:shrink-0 flex items-center justify-center p-4 md:p-6'>
          <img
            src={image}
            alt={imageAlt}
            className='w-full max-w-[250px] md:max-w-[280px] h-auto object-contain'
          />
        </div>
      </div>
    </div>
  );
};
