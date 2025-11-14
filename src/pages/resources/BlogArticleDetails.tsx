import { useParams } from 'react-router-dom';
import { ArticleHeader } from '../../components/sections/resources/ArticleHeader';
import { ArticleContent } from '../../components/sections/resources/ArticleContent';
import { OtherArticles } from '../../components/sections/resources/OtherArticles';
import { articlesData } from '../../data/articles';
import { NotFound } from '../NotFound';

export const BlogArticleDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the article by slug
  const article = articlesData.find((a) => a.slug === slug);

  // If article not found, show 404
  if (!article) {
    return <NotFound />;
  }

  return (
    <div className='w-full min-h-screen bg-base'>
      {/* Article Header */}
      <ArticleHeader
        date={article.date}
        readTime={article.readTime}
        title={article.title}
      />

      {/* Article Content */}
      <ArticleContent content={article.content} />

      {/* Other Articles */}
      <OtherArticles articles={articlesData} currentArticleId={article.id} />
    </div>
  );
};
