import FAQHero from '../../components/sections/resources/FAQHero';
import FAQSection from '../../components/sections/resources/FAQSection';

export const FAQs = () => {
  return (
    <div className='w-full min-h-screen bg-menu font-nunito'>
      {/* Hero Banner */}
      <FAQHero />
      {/* FAQ List */}
      <FAQSection />
    </div>
  );
};
