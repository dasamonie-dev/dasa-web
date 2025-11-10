import type { DropdownItem } from '../components/ui/Dropdown';
import {
  IoCashOutline,
  IoSaveOutline,
  IoCardOutline,
  IoStorefrontOutline,
  IoSwapHorizontalOutline,
  IoBriefcaseOutline,
  IoFingerPrintOutline,
} from 'react-icons/io5';
import { IoMdBook, IoMdHelpCircleOutline, IoMdDownload } from 'react-icons/io';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

export const productsDropdownItems: DropdownItem[] = [
  {
    icon: IoCashOutline,
    title: 'Loans',
    description: 'Personal, business, instant microloans.',
    to: '/products/loans',
  },
  {
    icon: IoSaveOutline,
    title: 'Savings',
    description: 'Fixed, flexible, target savings.',
    to: '/products/savings',
  },
  {
    icon: IoCardOutline,
    title: 'Cards',
    description: 'International & local debit cards.',
    to: '/products/cards',
  },
  {
    icon: IoStorefrontOutline,
    title: 'POS Terminals',
    description: 'Agent banking solutions.',
    to: '/products/pos-terminals',
  },
  {
    icon: IoSwapHorizontalOutline,
    title: 'Currency Conversion',
    description: 'Real-time exchange, multicurrency wallet.',
    to: '/products/currency-conversion',
  },
  {
    icon: IoBriefcaseOutline,
    title: 'Business Account',
    description: 'Tailored for SMEs, invoicing, analytics.',
    to: '/products/business-account',
  },
  {
    icon: IoFingerPrintOutline,
    title: 'Biometric Services',
    description: 'BVN, NIN integration & verification tools.',
    to: '/products/biometric-services',
  },
];

export const resourcesDropdownItems: DropdownItem[] = [
  {
    icon: IoMdBook,
    title: 'Blog / News',
    description: 'Fintech trends, security tips, company updates.',
    to: '/resources/blog',
  },
  {
    icon: IoMdHelpCircleOutline,
    title: 'FAQs',
    description: 'Organized by category (Accounts, Transactions, Cards, etc.)',
    to: '/resources/faqs',
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: 'Security & Privacy Policy',
    description: 'Transparency and compliance info.',
    to: '/resources/security-privacy',
  },
  {
    icon: IoMdDownload,
    title: 'Download Center',
    description: 'App links, brochures, product sheets.',
    to: '/resources/downloads',
  },
];
