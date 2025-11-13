import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const BackButton = ({
  onClick,
  label = 'Back',
  className = '',
}: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-accent hover:text-accent transition-colors text-sm border border-accent/10 cursor-pointer p-4 rounded-2xl ${className}`}
      aria-label={label}
    >
      <FaArrowLeft />
      <span>{label}</span>
    </button>
  );
};
