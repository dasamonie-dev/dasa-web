import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import type { DropdownItem } from './Dropdown';

interface MobileDropdownProps {
  label: string;
  items: DropdownItem[];
  onItemClick?: () => void;
}

export const MobileDropdown = ({
  label,
  items,
  onItemClick,
}: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  return (
    <div className='w-full'>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-accent hover:text-accent-hover hover:bg-menu font-medium flex items-center justify-between py-2 px-2 rounded-md transition-colors'
      >
        {label}
        <IoChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Items */}
      {isOpen && (
        <div className='mt-2 ml-4 space-y-1'>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.to}
                onClick={handleItemClick}
                className='flex items-start gap-3 px-3 py-2.5 hover:bg-menu rounded-md transition-colors'
              >
                <div className='shrink-0 mt-0.5'>
                  <Icon className='w-5 h-5 text-accent' />
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-sm font-semibold text-accent mb-0.5'>
                    {item.title}
                  </h3>
                  <p className='text-xs text-accent/70 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
