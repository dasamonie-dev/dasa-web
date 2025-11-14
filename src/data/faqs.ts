export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItemData[] = [
  {
    id: 'airtime-how',
    question: 'How can I recharge airtime using Dasamonie?',
    answer:
      "To recharge airtime: Log in to your Dasamonie account. Select the 'Airtime Recharge' option. Choose the network provider, enter the phone number, and amount. Select a payment method and confirm. Your airtime will be credited instantly.",
  },
  {
    id: 'networks-supported',
    question: 'Which networks are supported for airtime recharge?',
    answer:
      'Dasamonie supports major telecom providers across Africa, including: Nigeria: MTN, Airtel, Glo, 9mobile; Ghana: MTN Ghana, AirtelTigo, Vodafone; Kenya: Safaricom, Airtel Kenya; South Africa: MTN, Vodacom, Telkom.',
  },
  {
    id: 'recharge-someone-else',
    question: 'Can I recharge airtime for someone else?',
    answer:
      "Yes, you can. Simply enter the recipient's phone number during the recharge process, and they will receive the airtime instantly.",
  },
  {
    id: 'gift-airtime',
    question: 'Can I gift airtime to my family and friends?',
    answer:
      "Absolutely! The 'Gift Airtime' feature allows you to recharge for others easily, whether they are within Nigeria or across supported countries in Africa.",
  },
  {
    id: 'recharge-fails',
    question: 'What should I do if my airtime recharge fails?',
    answer:
      'If your recharge fails: Check your internet connection. Verify that the phone number and network provider are correct. Ensure your payment method has sufficient funds. If the issue persists, contact our 24/7 support team for immediate assistance.',
  },
  {
    id: 'security',
    question: 'Is my personal and payment information secure?',
    answer:
      'Yes. Dasamonie uses bank-level encryption and advanced security measures to ensure all your transactions and personal data remain safe.',
  },
  {
    id: 'save-frequent',
    question: 'Can I save frequent numbers for faster recharges?',
    answer:
      'Yes! Dasamonie allows you to save favorite phone numbers under your account for quick and convenient future recharges.',
  },
];
