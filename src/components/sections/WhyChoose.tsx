import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  IoBulbOutline,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
  IoHandLeftOutline,
} from 'react-icons/io5';

// BenefitCard component with AOS props
interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, index }) => {
  return (
    <div className='bg-white rounded-xl shadow p-6 flex flex-col items-start gap-4'>
      {/* Icon */}
      <div
        className='text-3xl text-accent'
        data-aos='fade-down'
        data-aos-delay={index * 150 + 100}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className='text-xl font-semibold'
        data-aos='fade-up'
        data-aos-delay={index * 150 + 200}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className='text-accent/70'
        data-aos='fade-up'
        data-aos-delay={index * 150 + 300}
      >
        {description}
      </p>
    </div>
  );
};

export const WhyChoose = () => {
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

  // Benefits array
  const benefits = [
    {
      icon: <IoBulbOutline />,
      title: 'Smart Technology',
      description:
        'We harness intelligent automation to simplify how you save, spend, and grow so every transaction feels effortless.',
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
          <h2
            data-aos='fade-down'
            data-aos-delay={100}
            className='font-extrabold text-accent text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4'
          >
            Why Choose Dasamonie?
          </h2>
          <p
            data-aos='fade-up'
            data-aos-delay={300}
            className='text-accent/70 sm:text-2xl lg:text-2xl max-w-3xl mx-auto'
          >
            Because managing your finances should be seamless, secure, and
            designed around your everyday needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              index={index}
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
