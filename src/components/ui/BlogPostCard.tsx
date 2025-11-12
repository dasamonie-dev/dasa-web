import type { ReactNode } from 'react';

interface BlogPostCardProps {
  image: string;
  imageAlt?: string;
  date: string;
  readTime?: string;
  title: string;
  excerpt?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
  rightSlot?: ReactNode;
}

export const BlogPostCard = ({
  image,
  imageAlt = 'Blog image',
  date,
  readTime,
  title,
  excerpt,
  ctaLabel = 'Read article',
  onCtaClick,
  className = '',
  rightSlot,
}: BlogPostCardProps) => {
  return (
    <article
      className={`w-full rounded-2xl md:border md:border-accent/20 bg-base md:shadow-sm ${className}`}
      aria-label={title}
    >
      <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-4 md:p-6'>
        {/* Image */}
        <div className='md:w-[42%] w-full'>
          <img
            src={image}
            alt={imageAlt}
            className='h-44 w-full md:h-48 lg:h-56 object-cover rounded-xl'
            loading='lazy'
          />
        </div>

        {/* Content */}
        <div className='flex-1'>
          <div className='flex items-center gap-3 text-[11px] md:text-xs text-accent/80'>
            <span className='inline-flex items-center gap-1'>
              <span
                className='inline-block h-2 w-2 rounded-full bg-menu'
                aria-hidden
              />
              {date}
            </span>
            {readTime && (
              <span className='rounded-full bg-hero px-2 py-0.5 text-accent/80 border border-accent/10'>
                {readTime}
              </span>
            )}
          </div>

          <h3 className='mt-2 text-sm md:text-lg lg:text-xl font-semibold text-accent max-w-sm '>
            {title}
          </h3>
          {excerpt && (
            <p className='mt-1 text-xs md:text-sm text-accent/70 line-clamp-2 max-w-md'>
              {excerpt}
            </p>
          )}

          <div className='mt-3 flex items-center gap-4'>
            <button
              onClick={onCtaClick}
              className='inline-flex items-center rounded-full bg-accent px-4 py-2 text-white text-xs md:text-sm hover:bg-accent/80 cursor-pointer'
            >
              {ctaLabel}
            </button>
            {rightSlot}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
