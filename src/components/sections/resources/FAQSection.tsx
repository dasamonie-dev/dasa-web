import Accordion from '../../ui/Accordion';
import type { AccordionItem } from '../../ui/Accordion';
import { faqs } from '../../../data/faqs';

export const FAQSection = () => {
  const items: AccordionItem[] = faqs.map((f) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section className='bg-menu'>
      <div className='mx-auto max-w-[1400px] sm:px-6 lg:px-8 py-10 md:py-14 w-full flex justify-center'>
        <div className='bg-base md:border border-accent/10 rounded-3xl overflow-hidden shadow w-full max-w-3xl'>
          <div className='px-4 sm:px-6 py-6 lg:border-b border-accent/10 text-center'>
            <h2 className='text-2xl md:text-3xl font-extrabold text-accent'>
              Frequently asked questions.
            </h2>
          </div>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
