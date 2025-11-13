interface ArticleMetadataProps {
  date: string;
  readTime: string;
  className?: string;
}

export const ArticleMetadata = ({
  date,
  readTime,
  className = '',
}: ArticleMetadataProps) => {
  return (
    <div
      className={`flex items-center gap-3 text-xs md:text-sm text-accent/80 ${className}`}
    >
      <span className='inline-flex items-center gap-1.5'>
        <span
          className='inline-block h-2 w-2 rounded-full bg-menu'
          aria-hidden='true'
        />
        {date}
      </span>
      <span className='rounded-full bg-hero px-3 py-1 text-accent/80 border border-accent/10'>
        {readTime}
      </span>
    </div>
  );
};
