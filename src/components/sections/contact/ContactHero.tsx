import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { AppDownloadBanner } from './AppDownloadBanner';
import ContactMethods from './ContactMethods';

export const ContactHero = () => {
  return (
    <section className='w-full bg-menu py-12 md:py-16 lg:py-20'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]'>
        {/* Two Column Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {/* Left Column - Contact Info */}
          <div className='w-full max-w-[474px] mx-auto lg:mx-0'>
            <ContactInfo />

            {/* App Download Banner - Desktop only, shown below contact info */}
            <div className='hidden lg:block mt-8'>
              <AppDownloadBanner />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='w-full'>
            <ContactForm />
          </div>

          {/* Contact methods mobile */}
          <div className='md:hidden'>
            <ContactMethods />
          </div>
        </div>
      </div>
    </section>
  );
};
