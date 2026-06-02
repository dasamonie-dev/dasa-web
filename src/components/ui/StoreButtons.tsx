interface StoreButtonsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
} as const;

export const StoreButtons = ({
  size = 'md',
  className = '',
}: StoreButtonsProps) => {
  const h = sizes[size];
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href='https://play.google.com/store/search?q=dasamonie+finance&c=apps'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-transform hover:scale-105'
      >
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
          alt='Get it on Google Play'
          className={`${h}`}
        />
      </a>
      <a
        href='https://apps.apple.com/us/app/dasamonie/id6751965193'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-transform hover:scale-105'
      >
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'
          alt='Download on the App Store'
          className={`${h}`}
        />
      </a>
    </div>
  );
};
