import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import type { IconType } from 'react-icons';

export interface DropdownItem {
  icon: IconType;
  title: string;
  description: string;
  to: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

export const Dropdown = ({ label, items, className = '' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-sm text-accent hover:text-accent-hover font-medium flex items-center gap-1 transition-colors'
        // aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup='true'
        type='button'
      >
        {label}
        <IoChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-[200%] left-0 mt-2 w-80 md:w-96 bg-base border border-gray-200 rounded-lg shadow-lg z-50 py-2'>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className='flex items-start gap-3 px-4 py-3 hover:bg-menu transition-colors'
              >
                <div className='shrink-0 mt-0.5'>
                  <Icon className='w-6 h-6 text-accent' />
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
