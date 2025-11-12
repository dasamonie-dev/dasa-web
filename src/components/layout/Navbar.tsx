import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Logo } from '../ui/Logo';
import { Dropdown } from '../ui/Dropdown';
import { MobileDropdown } from '../ui/MobileDropdown';
import {
  productsDropdownItems,
  resourcesDropdownItems,
} from '../../data/dropdownData';
import { StoreButtons } from '../ui/StoreButtons';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false); // Close menu on path change
  }, [location.pathname]);

  return (
    <nav className='w-full bg-base border-b border-gray-200'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            {/* Products & Services Dropdown */}
            <Dropdown
              label='Products & services'
              items={productsDropdownItems}
            />

            {/* About Us Link */}
            <NavLink
              to='/about'
              className={({ isActive }) =>
                `text-sm text-accent hover:text-accent-hover font-medium transition-colors ${
                  isActive ? 'text-accent-focus' : ''
                }`
              }
            >
              About us
            </NavLink>

            {/* Resources Dropdown */}
            <Dropdown label='Resources' items={resourcesDropdownItems} />

            {/* Contact Us Link */}
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `text-sm text-accent hover:text-accent-hover font-medium transition-colors ${
                  isActive ? 'text-accent-focus' : ''
                }`
              }
            >
              Contact us
            </NavLink>
          </div>

          {/* App Store Buttons */}
          <div className='hidden lg:flex'>
            <StoreButtons />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden p-2 rounded-md text-accent hover:text-accent-hover hover:bg-menu transition-colors'
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? (
              <IoClose className='w-6 h-6' />
            ) : (
              <IoMenu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden py-4 border-t border-gray-200'>
            <div className='flex flex-col gap-4'>
              {/* Products & Services Dropdown */}
              <MobileDropdown
                label='Products & services'
                items={productsDropdownItems}
                onItemClick={() => setMobileMenuOpen(false)}
              />

              {/* About Us Link */}
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `text-accent hover:text-accent-hover hover:bg-menu font-medium flex items-center justify-between py-2 px-2 rounded-md transition-colors ${
                    isActive ? 'bg-menu text-accent-focus' : ''
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </NavLink>

              {/* Resources Dropdown */}
              <MobileDropdown
                label='Resources'
                items={resourcesDropdownItems}
                onItemClick={() => setMobileMenuOpen(false)}
              />

              {/* Contact Us Link */}
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `text-accent hover:text-accent-hover hover:bg-menu font-medium flex items-center justify-between py-2 px-2 rounded-md transition-colors ${
                    isActive ? 'bg-menu text-accent-focus' : ''
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </NavLink>

              {/* Mobile App Store Buttons */}
              <div>
                <StoreButtons />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
