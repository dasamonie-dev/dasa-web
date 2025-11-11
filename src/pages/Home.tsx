import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { WhyChoose } from '../components/sections/WhyChoose';
import { CTASection } from '../components/sections/CTASection';

export const Home = () => {
  return (
    <div className='w-full font-nunito'>
      <Hero />
      <Features />
      <WhyChoose />
      <CTASection />
    </div>
  );
};
