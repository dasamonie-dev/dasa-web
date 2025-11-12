import { FeatureCard } from '../ui/FeatureCard';
import { useCallback } from 'react';

import loanImage from '../../assets/homeSection2/loan-repayment.svg';
import bankVerificationImage from '../../assets/homeSection2/bank-verification.svg';
import posImage from '../../assets/homeSection2/pos.svg';
import currencyImage from '../../assets/homeSection2/currency-conversion.svg';
import savingsImage from '../../assets/homeSection2/growing-coin.svg';
import cardsImage from '../../assets/homeSection2/debit-card.svg';

export const Features = () => {
  const features = [
    {
      title: 'Loans',
      subtitle: 'Empowering You with Instant Access to Credit.',
      description:
        'Get flexible personal and business loans at fair rates designed to help you achieve your goals, not limit them.',
      image: loanImage,
      imageAlt: 'Loan and credit services illustration',
      linkTo: '/products/loans',
    },
    {
      title: 'Biometric Services',
      subtitle: 'Secure Identity Verification, Made Simple',
      description:
        'Access BVN and NIN services with ease ensuring every transaction is verified, safe, and compliant.',
      image: bankVerificationImage,
      imageAlt: 'Bank verification illustration',
      linkTo: '/products/biometric-services',
    },
    {
      title: 'Cards',
      subtitle: 'Spend Freely, Anywhere You Are.',
      description:
        'Get local and international debit cards that work seamlessly online, abroad, and at any ATM backed by secure, real-time control.',
      image: cardsImage,
      imageAlt: 'POS terminal and debit card illustration',
      linkTo: '/products/cards',
    },
    {
      title: 'Currency Conversion',
      subtitle: 'Real-Time Currency Exchange, Simplified.',
      description:
        'Send, receive, and convert money across borders in seconds with transparent rates and no hidden.',
      image: currencyImage,
      imageAlt: 'Currency conversion illustration',
      linkTo: '/products/currency-conversion',
    },
    {
      title: 'Savings',
      subtitle: 'Grow Your Money, Secure Your Future',
      description:
        'Save smarter with fixed or flexible plans that help you reach your goals all while earning competitive interest effortlessly.',
      image: savingsImage,
      imageAlt: 'Savings and growth illustration',
      linkTo: '/products/savings',
    },
    {
      title: 'POS',
      subtitle: 'Power Your Business with Smart POS Solutions',
      description:
        'Accept payments faster and grow your business with reliable POS terminals built for agents, merchants, and enterprises.',
      image: posImage,
      imageAlt: 'POS machine',
      linkTo: '/products/pos-terminals',
    },
  ];

  const scrollTo = useCallback((key: string) => {
    const el = document.getElementById(key);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section className='bg-base py-12 md:py-16 lg:py-20 font-nunito'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-8 md:mb-10'>
          <h2 className='font-extrabold text-accent text-3xl sm:text-4xl lg:text-5xl leading-tight'>
            The Simpler Way to Move,
            <br className='hidden sm:block' /> Pay, and Manage Money
          </h2>
          <p className='mt-4 text-accent/70 sm:text-2xl max-w-3xl mx-auto'>
            Enjoy a unified experience for all your financial needs powered by
            technology, built for you.
          </p>
        </div>

        {/* Navigation Tabs (scroll triggers) */}
        <div className='lg:flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-10 md:mb-12 text-sm sm:text-base hidden'>
          {[
            'loans',
            'biometric-services',
            'cards',
            'currency-conversion',
            'savings',
            'pos',
          ].map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => scrollTo(item)}
              className={`px-0 bg-transparent text-accent/60 hover:text-accent transition-colors font-medium ${
                item === 'currency-conversion'
                  ? 'border-b-2 border-menu pb-1 text-accent'
                  : ''
              }`}
            >
              {item === 'biometric-services'
                ? 'Biometric Services'
                : item
                    .split('-')
                    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                    .join(' ')}
            </button>
          ))}
        </div>

        {/* Feature Cards */}
        <div className='space-y-6 lg:space-y-8 w-full flex flex-col items-center'>
          {features.map((feature, index) => (
            <FeatureCard
              id={feature.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/&/g, '')}
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              description={feature.description}
              image={feature.image}
              imageAlt={feature.imageAlt}
              linkTo={feature.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
