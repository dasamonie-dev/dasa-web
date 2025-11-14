import { useNavigate } from 'react-router-dom';
import { ArticleCard } from '../../ui/ArticleCard';
import { BlogPostCard } from '../../ui/BlogPostCard';
import lady from '../../../assets/blogpage/blogherolady.svg';
import { articlesData } from '../../../data/articles';

export const Articles = () => {
  const navigate = useNavigate();

  const handleArticleClick = (slug: string) => {
    navigate(`/resources/blog/${slug}`);
  };

  return (
    <section className='w-full bg-base md:bg-menu py-10 relative'>
      <div className='px-4 sm:px-6 lg:px-8 max-w-[1400px] space-y-8'>
        {/* Featured card */}
        <div className='block lg:h-[20vh] lg:flex justify-center'>
          <div className='flex justify-center mb-10 lg:absolute lg:-top-[10%]'>
            <BlogPostCard
              className='w-full max-w-[960px]'
              image={lady}
              imageAlt='Young lady on phone'
              date='17 July, 2025'
              readTime='3 min read'
              title='The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game'
              excerpt='Discover how VTU makes airtime and data recharges faster, easier, and more reliable no more queues or scratch cards.'
              onCtaClick={() => handleArticleClick(articlesData[0]?.slug || '')}
            />
          </div>
        </div>
        {/* Articles Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center space-y-8'>
          {articlesData.map((article) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              date={article.date}
              readTime={article.readTime}
              title={article.title}
              description={article.description}
              onClick={() => handleArticleClick(article.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
