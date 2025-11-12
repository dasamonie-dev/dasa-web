import { BlogHero } from '../../components/sections/resources/BlogHero';
import { Articles } from '../../components/sections/resources/Articles';
import { CTASection } from '../../components/sections/CTASection';

export const Blog = () => {
  return (
    <div className='w-full min-h-screen bg-base'>
      {/* Hero section */}
      <BlogHero />

      {/* Articles section */}
      <Articles />

      <CTASection />
    </div>
  );
};
