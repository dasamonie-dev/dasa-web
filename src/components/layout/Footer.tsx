import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { IoLogoYoutube, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { to: '/products/loans', label: 'Loan services' },
    { to: '/products/savings', label: 'Savings' },
    { to: '/products/cards', label: 'Cards' },
    { to: '/products/business-account', label: 'Business account' },
    { to: '/products/biometric-services', label: 'VTU services' },
    { to: '/products/currency-conversion', label: 'Currency exchange' },
    { to: '/products/cards', label: 'Virtual cards' },
    { to: '/products/pos-terminals', label: 'POS Services' },
  ];

  const companyLinks = [
    { to: '/about', label: 'About us' },
    { to: '/contact', label: 'Help center' },
    { to: '/about', label: 'Partners' },
    { to: '/about', label: 'Careers' },
    { to: '/contact', label: 'Press' },
  ];

  const resourceLinks = [
    { to: '/resources/blog', label: 'Blog' },
    { to: '/resources/security-privacy', label: 'Terms & Policies' },
    { to: '/resources/faqs', label: 'FAQs' },
    { to: '/resources/security-privacy', label: 'Security' },
  ];

  return (
    <footer className='bg-footer text-white'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 '>
        {/* Top Section*/}
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12 '>
          <div className='flex-1 max-w-xl '>
            <div className='bg-linear-to-br from-gray-900 to-black border border-white/10 relative w-full max-w-[200px] p-4 rounded-full overflow-hidden'>
              <div className='absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-3xl pointer-events-none'></div>

              <Logo variant='light' />
            </div>
            <p className='mt-4 text-white/70 lg:text-2xl leading-relaxed max-w-sm'>
              With Dasamonie, the speed, security, and simplicity you've been
              waiting for is already here. Take the first step now, your money
              will thank you.
            </p>

            {/* Social Icons */}
            <div className='flex items-center gap-4 mt-6'>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-menu transition-colors'
                aria-label='Twitter'
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-menu transition-colors'
                aria-label='YouTube'
              >
                <IoLogoYoutube size={28} />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-menu transition-colors'
                aria-label='LinkedIn'
              >
                <IoLogoLinkedin size={24} />
              </a>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-menu transition-colors'
                aria-label='Facebook'
              >
                <IoLogoFacebook size={24} />
              </a>
            </div>

            {/* Country Flags */}
            <div className='flex items-center gap-3 mt-6'>
              <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white/20'>
                <img
                  src='https://flagcdn.com/w40/ng.png'
                  alt='Nigeria flag'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white/20'>
                <img
                  src='https://flagcdn.com/w40/us.png'
                  alt='USA flag'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            {/* Address */}
            <div className='mt-8 space-y-1 text-white/70 lg:text-xl'>
              <p>
                <span className='font-semibold text-white'>Address:</span> 4600
                SUNSET CANYON NEW MEXICO USA.
              </p>
              <p>Block SB3, Flat 16, NNPC Area 11, Garki-Abuja*</p>
            </div>

            {/* Newsletter Section inside left group */}
            <div className='mt-8'>
              <p className='text-white text-sm mb-3'>
                Stay updated with Dasamonie fintech insights.
              </p>
              <form className='flex flex-col sm:flex-row gap-3'>
                <input
                  type='email'
                  placeholder="What's your email?"
                  className='flex-1 min-w-60 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-menu transition-colors'
                />
                <button
                  type='submit'
                  className='px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right group: link clusters aligned right */}
          <div className='flex-[1.2] flex justify-start lg:justify-end w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-xl'>
              {/* Products */}
              <div>
                <h3 className='font-bold text-white text-2xl mb-4'>Products</h3>
                <ul className='space-y-3'>
                  {productLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className='text-white/70 hover:text-white text-xl transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company */}
              <div>
                <h3 className='font-bold text-white text-2xl mb-4'>Company</h3>
                <ul className='space-y-3'>
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className='text-white/70 hover:text-white text-xl transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h3 className='font-bold text-white text-2xl mb-4'>
                  Resources
                </h3>
                <ul className='space-y-3'>
                  {resourceLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className='text-white/70 hover:text-white text-xl transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider*/}
        <div className='border-b border-white/10 pb-8 mt-4 flex flex-col sm:flex-row justify-between items-center gap-6'>
          <p className='text-white/70 text-sm'>
            © {currentYear} Dasamonie. All rights reserved.
          </p>
          <a
            href='mailto:Contact@dasamonie.com'
            className='text-white hover:text-menu text-sm transition-colors'
          >
            Contact@dasamonie.com
          </a>
        </div>
      </div>

      {/* Large Background Text */}
      <div className='relative overflow-hidden py-8'>
        <p className='text-[3.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] font-extrabold text-white/5 text-center leading-none select-none'>
          Dasamonie
        </p>
      </div>
    </footer>
  );
};
