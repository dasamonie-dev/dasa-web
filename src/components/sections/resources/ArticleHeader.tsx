import { BackButton } from '../../ui/BackButton';
import { ArticleMetadata } from '../../ui/ArticleMetadata';

interface ArticleHeaderProps {
  date: string;
  readTime: string;
  title: string;
}

export const ArticleHeader = ({
  date,
  readTime,
  title,
}: ArticleHeaderProps) => {
  return (
    <header className='w-full bg-base py-6 md:py-10 flex flex-col items-center'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]'>
        <div className='max-w-4xl'>
          {/* Back Button */}
          <BackButton className='mb-4' />

          {/* Metadata */}
          <ArticleMetadata date={date} readTime={readTime} className='mb-4' />

          {/* Title */}
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent leading-tight'>
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};
