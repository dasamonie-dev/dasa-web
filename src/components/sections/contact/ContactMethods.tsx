import { HiMail } from 'react-icons/hi';
import { BsChatDotsFill } from 'react-icons/bs';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

export default function ContactMethods() {
  return (
    <div>
      <div className='space-y-4 mb-6 md:mb-8'>
        {/* Email */}
        <div className='flex items-start gap-3'>
          <div className='w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0'>
            <HiMail className='w-5 h-5 text-white' />
          </div>
          <div>
            <p className='text-sm text-accent/70 mb-1'>Email us</p>
            <a
              href='mailto:Support@dasamonie.com'
              className='text-accent font-medium hover:text-accent/80 transition-colors'
            >
              Support@dasamonie.com
            </a>
          </div>
        </div>

        {/* Support */}
        <div className='flex items-start gap-3'>
          <div className='w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0'>
            <BsChatDotsFill className='w-5 h-5 text-white' />
          </div>
          <div>
            <p className='text-sm text-accent/70 mb-1'>Get support</p>
            <a
              href='mailto:info@dasamonie.com'
              className='text-accent font-medium hover:text-accent/80 transition-colors'
            >
              info@dasamonie.com
            </a>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className='mb-6 md:mb-8'>
        <p className='text-xs font-semibold text-accent mb-3 uppercase tracking-wide'>
          Check us on our social media handles
        </p>
        <div className='flex items-center gap-4'>
          {/* Facebook */}
          <a
            href='#'
            className='w-10 h-10 rounded-lg bg-accent hover:bg-accent/90 transition-colors flex items-center justify-center'
            aria-label='Facebook'
          >
            <FaFacebook className='w-5 h-5 text-white' />
          </a>

          {/* Instagram */}
          <a
            href='#'
            className='w-10 h-10 rounded-lg bg-accent hover:bg-accent/90 transition-colors flex items-center justify-center'
            aria-label='Instagram'
          >
            <FaInstagram className='w-5 h-5 text-white' />
          </a>

          {/* TikTok */}
          <a
            href='#'
            className='w-10 h-10 rounded-lg bg-accent hover:bg-accent/90 transition-colors flex items-center justify-center'
            aria-label='TikTok'
          >
            <FaTiktok className='w-5 h-5 text-white' />
          </a>

          {/* LinkedIn */}
          <a
            href='#'
            className='w-10 h-10 rounded-lg bg-accent hover:bg-accent/90 transition-colors flex items-center justify-center'
            aria-label='LinkedIn'
          >
            <FaLinkedin className='w-5 h-5 text-white' />
          </a>

          {/* X/Twitter */}
          <a
            href='#'
            className='w-10 h-10 rounded-lg bg-accent hover:bg-accent/90 transition-colors flex items-center justify-center'
            aria-label='X (Twitter)'
          >
            <FaXTwitter className='w-5 h-5 text-white' />
          </a>
        </div>
      </div>
    </div>
  );
}
