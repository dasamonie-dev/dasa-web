import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { WhyChoose } from '../components/sections/WhyChoose';
import { CTASection } from '../components/sections/CTASection';

export const Home = () => {
   // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        offset: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div className='w-full font-nunito'>
      <Hero />
      <Features />
      <WhyChoose />
      <CTASection />
    </div>
  );
};
