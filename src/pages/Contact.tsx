import { ContactHero } from '../components/sections/contact/ContactHero';
import ContactMap from '../components/sections/contact/ContactMap';
import { CTASection } from '../components/sections/CTASection';

export const Contact = () => {
  return (
    <div className='w-full min-h-screen bg-menu'>
      <ContactHero />
      <div className='hidden lg:block'>
        <ContactMap />
      </div>
      <CTASection />
    </div>
  );
};
