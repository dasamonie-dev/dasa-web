interface ArticleCardProps {
  image: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

export const ArticleCard = ({
  image,
  date,
  readTime,
  title,
  description,
}: ArticleCardProps) => {
  return (
    <div className='w-full max-w-[400px] bg-base rounded-lg overflow-hidden md:shadow-md md:hover:shadow-lg transition-shadow h-full'>
      {/* Image */}
      <div className='w-full h-[200px] overflow-hidden'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>

      {/* Content */}
      <div className='p-4 sm:p-6'>
        {/* Date and Read Time */}
        <div className='flex items-center gap-3 mb-3'>
          <div className='flex items-center gap-1'>
            <span className='w-2 h-2 rounded-full bg-green-500'></span>
            <span className='text-xs sm:text-sm text-accent/70'>{date}</span>
          </div>
          <span className='text-xs sm:text-sm text-accent/70'>{readTime}</span>
        </div>

        {/* Title */}
        <h3 className='text-lg sm:text-xl font-semibold text-accent mb-2 line-clamp-2'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-sm text-accent/70 mb-4 line-clamp-3'>
          {description}
        </p>

        {/* Button */}
        <div className='mt-3 flex items-center gap-4'>
          <button className='inline-flex items-center rounded-full bg-accent px-4 py-2 text-white text-xs md:text-sm hover:bg-accent/80 cursor-pointer'>
            Read article
          </button>
        </div>
      </div>
    </div>
  );
};
