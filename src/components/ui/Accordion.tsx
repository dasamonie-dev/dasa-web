import { useState, type ReactNode } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string | ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion = ({
  items,
  className = '',
  allowMultiple = false,
}: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <div
      className={`divide-y divide-accent/10 md:rounded-2xl bg-base shadow-sm ${className}`}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className='hover:bg-menu/50'>
            <button
              onClick={() => toggle(item.id)}
              className='w-full text-left px-4 sm:px-6 py-5 flex items-start justify-between gap-4 focus:outline-none cursor-pointer'
            >
              <span className='font-semibold text-accent'>{item.question}</span>
              <span className='shrink-0 text-accent/60 text-xs md:text-sm mt-5'>
                {isOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {isOpen && (
              <div className='px-4 sm:px-6 pb-6 -mt-2 text-xs md:text-sm leading-relaxed text-accent/80'>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
