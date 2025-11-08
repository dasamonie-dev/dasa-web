import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logoicon.svg';

interface LogoProps {
  className?: string;
  showText?: boolean;
  to?: string;
  variant?: 'dark' | 'light';
}

export const Logo = ({
  className = '',
  showText = true,
  to = '/',
  variant = 'dark',
}: LogoProps) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-accent';

  const content = (
    <>
      <div className='w-full h-full   rounded-lg flex items-center justify-center'>
        <img src={logoIcon} alt='dasamonie logo' />
      </div>
      {showText && (
        <span className={`text-2xl font-bold ${textColor} md:block`}>
          Dasamonie
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`flex items-center gap-2 shrink-0 ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      {content}
    </div>
  );
};
