import { type ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow'>
      {/* Icon */}
      <div className='inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-menu rounded-2xl mb-5'>
        <div className='text-accent text-2xl sm:text-3xl'>{icon}</div>
      </div>

      {/* Title */}
      <h3 className='font-bold text-accent text-xl sm:text-2xl mb-3'>
        {title}
      </h3>

      {/* Description */}
      <p className='text-accent/70 lg:text-2xl leading-relaxed'>
        {description}
      </p>
    </div>
  );
};
