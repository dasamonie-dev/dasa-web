import { Link } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';

export const NotFound = () => {
  return (
    <main className='min-h-[70vh] flex flex-col items-center justify-center bg-hero px-4 sm:px-6 lg:px-8 text-center'>
      <Logo className='mb-6' />
      <h1 className='text-accent font-extrabold text-6xl sm:text-7xl tracking-tight'>
        404
      </h1>
      <p className='mt-4 text-accent/80 sm:text-lg max-w-md'>
        Oops! The page you are looking for doesn’t exist or was moved. Let’s get
        you back to something that works.
      </p>
      <div className='mt-8 flex flex-col sm:flex-row gap-4'>
        <Link
          to='/'
          className='px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition-colors'
        >
          Go Home
        </Link>
        <Link
          to='/contact'
          className='px-6 py-3 rounded-full bg-menu text-accent font-medium hover:bg-menu/80 transition-colors'
        >
          Contact Support
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
