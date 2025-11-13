import { useNavigate } from 'react-router-dom';
import { ArticleCard } from '../../ui/ArticleCard';

interface Article {
  id: number;
  image: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  slug?: string;
}

interface OtherArticlesProps {
  articles: Article[];
  currentArticleId?: number;
  maxArticles?: number;
}

export const OtherArticles = ({
  articles,
  currentArticleId,
  maxArticles = 3,
}: OtherArticlesProps) => {
  const navigate = useNavigate();

  // Filter out current article and limit to maxArticles
  const filteredArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .slice(0, maxArticles);

  const handleArticleClick = (slug?: string, id?: number) => {
    if (slug) {
      navigate(`/resources/blog/${slug}`);
    } else if (id) {
      navigate(`/resources/blog/${id}`);
    }
  };

  return (
    <section className='w-full bg-section py-10 md:py-16'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]'>
        {/* Section Title */}
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-8 md:mb-12'>
          Other articles
        </h2>

        {/* Articles Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article.slug, article.id)}
              className='cursor-pointer'
            >
              <ArticleCard
                image={article.image}
                date={article.date}
                readTime={article.readTime}
                title={article.title}
                description={article.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
