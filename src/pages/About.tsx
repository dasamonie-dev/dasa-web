import AboutHero from '../components/sections/about/AboutHero';
// import LeadershipTeam from '../components/sections/about/LeadershipTeam';
import Mission from '../components/sections/about/Mission';
import Purpose from '../components/sections/about/Purpose';
import { CTASection } from '../components/sections/CTASection';

export const About = () => {
  return (
    <div className='w-full min-h-screen bg-base font-nunito'>
      <AboutHero />
      <Mission />
      <Purpose />
      
      <CTASection />
    </div>
  );
};
