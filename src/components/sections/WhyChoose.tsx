import { BenefitCard } from '../ui/BenefitCard';
import {
  IoBulbOutline,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
  IoHandLeftOutline,
} from 'react-icons/io5';

export const WhyChoose = () => {
  const benefits = [
    {
      icon: <IoBulbOutline />,
      title: 'Smart Technology',
      description:
        'We harness intelligent automation to simplify how you save, spend, and grow  so every transaction feels effortless.',
    },
    {
      icon: <IoShieldCheckmarkOutline />,
      title: 'Bank-Grade Security',
      description:
        'Your data and money are protected with industry-standard encryption, multi-layer verification, and continuous monitoring.',
    },
    {
      icon: <IoHandLeftOutline />,
      title: 'Trusted by Businesses & Individuals',
      description:
        'From individuals to enterprises, people across Nigeria rely on Dasamonie for secure, reliable, and transparent financial solutions.',
    },
    {
      icon: <IoFlashOutline />,
      title: 'Seamless Access',
      description:
        'Enjoy instant access to all your accounts and services securely synced across devices, platforms, and channels.',
    },
  ];

  return (
    <section className='bg-section py-12 md:py-16 lg:py-20 font-nunito'>
      <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-10 md:mb-14'>
          <h2 className='font-extrabold text-accent text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4'>
            Why Choose Dasamonie?
          </h2>
          <p className='text-accent/70 sm:text-2xl lg:text-2xl max-w-3xl mx-auto'>
            Because managing your finances should be seamless, secure, and
            designed around your everyday needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
