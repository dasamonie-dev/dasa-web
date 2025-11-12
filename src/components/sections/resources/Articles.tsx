import { ArticleCard } from '../../ui/ArticleCard';
import { BlogPostCard } from '../../ui/BlogPostCard';
import lady from '../../../assets/blogpage/blogherolady.svg';
import futurearticle1 from '../../../assets/blogpage/futurearticle1.svg';
import futurearticle2 from '../../../assets/blogpage/futurearticle2.svg';
import futurearticle3 from '../../../assets/blogpage/futureaticle3.svg';
import futurearticle4 from '../../../assets/blogpage/futurearticle4.svg';
import futurearticle5 from '../../../assets/blogpage/futurearticle5.svg';
import futurearticle6 from '../../../assets/blogpage/futurearticle6.svg';

const articlesData = [
  {
    id: 1,
    image: futurearticle1,
    date: '17 July, 2025',
    readTime: '3 min read',
    title: 'The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game',
    description:
      'Discover how VTU makes airtime and data recharges faster, easier, and more reliable: no more queues or scratch cards.',
  },
  {
    id: 2,
    image: futurearticle2,
    date: '17 July, 2025',
    readTime: '3 min read',
    title: 'The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game',
    description:
      'Discover how VTU makes airtime and data recharges faster, easier, and more reliable: no more queues or scratch cards.',
  },
  {
    id: 3,
    image: futurearticle3,
    date: '17 July, 2025',
    readTime: '3 min read',
    title: 'The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game',
    description:
      'Discover how VTU makes airtime and data recharges faster, easier, and more reliable: no more queues or scratch cards.',
  },
  {
    id: 4,
    image: futurearticle4,
    date: '17 July, 2025',
    readTime: '3 min read',
    title: 'The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game',
    description:
      'Discover how VTU makes airtime and data recharges faster, easier, and more reliable: no more queues or scratch cards.',
  },
  {
    id: 5,
    image: futurearticle5,
    date: '17 July, 2025',
    readTime: '3 min read',
    title: 'The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game',
    description:
      'Discover how VTU makes airtime and data recharges faster, easier, and more reliable: no more queues or scratch cards.',
  },
  {
    id: 6,
    image: futurearticle6,
    date: '17 July, 2025',
    readTime: '3 min read',
    title: 'The Future of Airtime & Data Top-Ups: Why VTU is Changing the Game',
    description:
      'Discover how VTU makes airtime and data recharges faster, easier, and more reliable: no more queues or scratch cards.',
  },
];

export const Articles = () => {
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
